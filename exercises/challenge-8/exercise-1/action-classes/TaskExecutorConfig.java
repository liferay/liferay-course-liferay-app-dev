package com.clarityvisionsolutions.distributor.mgmt.actions;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.task.TaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;

/**
 * Creates the task executor which will be processing the account creation requests.
 *
 * @author dnebing
 */
@Configuration
public class TaskExecutorConfig {

	@Bean
	public TaskExecutor taskExecutor() {

		// create a thread pool for the task executor

		ThreadPoolTaskExecutor threadPoolTaskExecutor =
			new ThreadPoolTaskExecutor();

		// initialize to some reasonable values

		threadPoolTaskExecutor.setCorePoolSize(0);
		threadPoolTaskExecutor.setMaxPoolSize(10);
		threadPoolTaskExecutor.setQueueCapacity(100);
		threadPoolTaskExecutor.setThreadNamePrefix("CreateAccountTaskExecutor-");

		// initialize the task executor

		threadPoolTaskExecutor.initialize();

		// return the task executor

		return threadPoolTaskExecutor;
	}

}