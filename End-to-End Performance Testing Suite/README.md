# Performance Testing Project  
**Automated Performance Testing using Apache JMeter and K6**  

## 🔍 Project Overview  
This project demonstrates comprehensive performance testing methodologies for web applications, implementing:  
- End-to-end user journey simulations  
- API performance validation  
- Advanced load profiling techniques  
- Comparative analysis between JMeter and K6  

## � Key Highlights  

### 1️⃣ Full User Journey Simulation (JMeter)  
- Scripted complete e-commerce workflows:  
  - User registration → Product selection → Cart management → Order confirmation  
  - Implemented CSV parameterization for test data  
  - Added response assertions for validation  

### 2️⃣ REST API Performance Testing  
- Automated API test flows:  
  - Token generation → Booking creation → Retrieval → Update → Deletion  
  - Utilized **Regex** and **JSON Extractors** for dynamic data handling  

### 3️⃣ Performance Benchmarking  
- 10-minute sustained load test with 2 concurrent users  
- Validated against strict SLAs:  
  - Error rate < 1%  
  - 90% of requests under 3 seconds  
  - 99% of requests under 5 seconds  

### 4️⃣ Advanced Load Profiling  
- **Stepping Thread Group**: Gradual ramp-up to identify breaking points  
- **Ultimate Thread Group**: Complex scenarios with sudden traffic spikes  
- Resilience testing under extreme conditions  

### 5️⃣ K6 Implementation  
- Leveraged JavaScript-based scripting for flexibility  
- Enhanced scripting efficiency using **GitHub Copilot**  
- Implemented:  
  - Custom metrics  
  - Threshold-based alerts  
  - Comparative analysis vs. JMeter  

## 🛠️ Tools & Technologies  
`JMeter` | `K6` | `CSV Data Sets` | `Stepping Thread Group` | `Ultimate Thread Group` | `GitHub Copilot`  

## 🎯 Outcomes  
- Mastered JMeter and K6 for diverse testing scenarios  
- Developed methodologies for real-world performance challenges  
- Gained expertise in analyzing and interpreting test results  

