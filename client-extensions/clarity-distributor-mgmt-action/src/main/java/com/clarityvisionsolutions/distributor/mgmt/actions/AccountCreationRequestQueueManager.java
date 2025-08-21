package com.clarityvisionsolutions.distributor.mgmt.actions;

import java.util.concurrent.BlockingQueue;
import java.util.concurrent.LinkedBlockingQueue;
import java.util.concurrent.locks.Condition;
import java.util.concurrent.locks.ReentrantLock;

import org.springframework.stereotype.Service;

/**
 * Manages the queue of account creation requests.
 *
 * @author dnebing
 */
@Service
public class AccountCreationRequestQueueManager {

	/**
	 * Waits for work to be available.
	 *
	 * @throws InterruptedException if the thread is interrupted while waiting for
	 *                              work
	 */
	public void awaitWork() throws InterruptedException {
		_lock.lock();

		try {
			while (isEmpty()) {
				_notEmpty.await(); // Wait until notified
			}
		} finally {
			_lock.unlock();
		}
	}

	/**
	 * Dequeues an account creation request.
	 *
	 * @return the account creation request
	 * @throws InterruptedException if the thread is interrupted while waiting for
	 *                              an account creation request
	 */
	public AccountCreationRequest dequeue() throws InterruptedException {

		// Remove the request from the queue

		return _queue.take();
	}

	/**
	 * Enqueues an account creation request.
	 *
	 * @param accountCreationRequest the account creation request
	 */
	public void enqueue(AccountCreationRequest accountCreationRequest) {

		// Add the request to the queue

		_queue.add(accountCreationRequest);

		// signal the executor that work is available

		_signalExecutor();
	}

	/**
	 * Checks if the queue is empty.
	 *
	 * @return true if the queue is empty, false otherwise
	 */
	public boolean isEmpty() {
		return _queue.isEmpty();
	}

	/**
	 * Signals the executor that work is available.
	 */
	private void _signalExecutor() {
		_lock.lock();

		try {
			_notEmpty.signal(); // Notify the executor that work is available
		} finally {
			_lock.unlock();
		}
	}

	private final ReentrantLock _lock = new ReentrantLock();
	private final Condition _notEmpty = _lock.newCondition();
	private final BlockingQueue<AccountCreationRequest> _queue = new LinkedBlockingQueue<>();

}