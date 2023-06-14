
# Load Testing Scripts for Backend Application APIs
This repository contains a collection of load testing scripts written in K6 to assess the performance and reliability of your backend application APIs. Load testing helps identify performance regressions, scalability issues, and bottlenecks, enabling you to build resilient and performant applications that can handle high traffic.

## Why Load Testing?
Load testing is essential to ensure your system can handle the expected workload and provide a seamless experience for your users. It helps in analyzing the system's response under different load scenarios, identifying performance issues, and making informed decisions to optimize your application's performance.

## Installation:
Step 1: Install: Download and install the latest version of k6 from the official website (https://k6.io/docs/get-started/installation/).

## Running Test Cases:
**Step 1:** Clone the Repository: Clone the repository containing the load testing scripts to your local machine.

**Step 2:** Navigate to the Repository Directory: Open a terminal or command prompt and navigate to the directory where you cloned the repository.

**Step 3:** Execute a Test Case: To run a specific test case, use the following command:
```k6 run path/to/testfile.js  ```
Replace path/to/testfile.js with the relative path to the desired test file from the current directory.
For example, to run the "Smoke Test" script, the command would be:
```k6 run 1-smoke-test.js```
K6 will execute the test case and display the test results and relevant metrics in the terminal.

**Step 4:** Customize Test Execution: K6 provides various options to customize test execution, such as specifying the number of virtual users, test duration, thresholds, and output formats. Refer to the K6 documentation (https://k6.io/docs) for more information on these options and how to use them. For Example: 

 - To specify the number of virtual users to simulate, use the --vus flag: 
   ```k6 run --vus 50 path/to/testfile.js``` 
   This command will run the test case with 50 virtual users.
   
 - To output the load test result in a log file, use the --console-output flag: ```k6 run path/to/testfile.js --console-output result.log``` This
   command will run the test case and output the result in result.log
   file.

Congratulations! You have successfully installed K6 and executed a load testing script. Repeat Step 3 for each test case mentioned below, customizing the command as necessary. Analyze the test results to gain insights into your backend application's performance under different load scenarios.

## Script Details
1. **Smoke Test**
File Name: `1-smoke-test.js`
Description: This script verifies that the load testing script functions correctly and tests the system under minimal load. It provides baseline performance values for further comparisons.

2. **Load Test**
File Name: `2-load-test.js`
Description: The load test assesses how the system performs under typical load, simulating a regular day in production or an average moment. It helps evaluate the system's response and performance metrics under realistic conditions.

3. **Stress Test**
File Name: `3-stress-test.js`
Description: The stress test applies higher load compared to the average load test. It helps identify the system's breaking point, examining its behavior and performance under increased load. The ramp-up period is longer to account for the load increase.

4. **Soak Test**
File Name: `4-soak-test.js`
Description: The soak test focuses on extended periods, analyzing the system's degradation of performance and resource consumption over time. It tests the system's availability and stability during prolonged periods of usage, providing insights into its long-term behavior.

5. **Spike Test**
File Name: `5-spike-test.js`
Description: The spike test verifies the system's ability to handle sudden and massive rushes of utilization. It applies extremely high loads in a short or non-existent ramp-up time, simulating real-world scenarios with quick load spikes.

6. **Breakpoint Test**
File Name: `6-breakpoint-test.js`
Description: The breakpoint test aims to identify the system's limits by ramping up to unrealistically high load numbers. It helps in understanding where and how the system starts to fail, providing insights for scalability planning and optimizing system performance.

7. **Response Time Test**
File Name: `7-response-time-test.js`
Description: The response time test measures the average response time of the APIs to assess server capacity. It helps identify any latency or performance issues, enabling you to optimize your backend services for improved responsiveness.

8. **Customized Load Test**
File Name: `8-script-customized-load-test.js`
Description: The customized load test allows you to simulate varying load scenarios to ensure your application can handle real-world usage demands. By customizing the load pattern, you can validate your application's performance and reliability under specific traffic conditions.

9. **Rate Limit Test**
File Name: `9-rate-limit-test.js`
Description: The rate limit test helps you evaluate the effectiveness of your rate limiting mechanisms in protecting your application from abuse or excessive usage. It ensures optimal performance for legitimate users while preventing unauthorized or excessive requests.

10. **Extreme Stress Test**
File Name: `10-extreme-stress-test.js`
Description: The extreme stress test is similar to the stress test but with significantly higher load, typically 5 to 10 times of what you expect in your production environment. It helps you push the system to its limits and identify potential weaknesses or bottlenecks.


> Feel free to explore and modify these load testing scripts according to your specific application requirements.