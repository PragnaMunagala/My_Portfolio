import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../../app.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      category: 'Machine Learning',
      project: [
        {
          title: 'Team Performance Predictor',
          lang: ['Programming Language', 'Python'],
          desc: [
            'Implemented Multi-layer Neural Networks and Gaussian Naive Bayes classifiers on the ' +
            'movielens dataset to predict the performance rating of a team.',
            'Dataset comprise 10197 samples which is collected from ratings of 2113 users.',
            'Using k-fold cross validation, accuracy turned out to be 70% when k=10.'
            ],
          src: ['Source Code',
            'https://github.com/PragnaMunagala/Machine_learning/tree/master/Team_Performace_Predictor']
        },
        {
          title: 'Image classification using K-Nearest Neighbor',
          lang: ['Programming Language', 'Matlab'],
          desc: [
            'Implemented facial recognition and classification using k-nearest neighbours algorithm.',
            'Dataset comprise of 7396 samples and accuracy is approximately 70% for k=50.'
          ],
          src: ['Source Code',
            'https://github.com/PragnaMunagala/Machine_learning/tree/master/facial_recognition_knn']
        }
      ],
      show: false
    },
    {
      category: 'Android Programming',
      project: [
        {
          title: 'BraiNet Application',
          lang: ['Programming Language', 'Matlab, Python, Android'],
          desc: [
            'Developed an android application which does user identification using brain wave signal information.',
            'Decision tree machine learning algorithm is used to train the model. Data processing is done using edfread() method which ' +
            'takes edffiles that contains brain wave as input.',
            'Dataset comprise of 1526 records collected from 109 users. Using k-fold validation, best accuracy turned out to 80%.' +
            'The trained model is hosted on remote and fog server. ',
            'The android application has an option for user to select among fog or remote server or chose the best, once user selects an ' +
            ' option the users brain wave signal is sent to the server where the user recognition is done and the corresponding user label'+
            'is sent back to application. Based on the network connectivity and battery level of mobile, the app chooses the best among ' +
            'remote and fog(local) server when user selects choose the best option.',
            'The user id, battery level and response time are displayed as output in the android application.'
            ],
          src: ['Source Code', 'https://github.com/PragnaMunagala/Android_Programming/tree/master/BraiNet']
        },
        {
          title: 'Health Monitor Application',
          lang: ['Programming Language', 'Android'],
          desc: [
            'Designed an android application that does health monitoring of an individual.',
            'Supports upload/download of patient’s information database to local file system/remote server.',
            'Used SQLite database for storing the user information.'
          ],
          src: ['Source Code',
            'https://github.com/PragnaMunagala/Android_Programming/tree/master/HealthMonitor']
        }
      ],
      show: false
    },
    {
      category: 'Software Security',
      project: [
        {
          title: 'Secure Banking Application',
          lang: ['Programming Language', 'Java'],
          desc: [
            'Developed end-to-end secure banking web application where a user can make money transactions in a secure way.',
            'Enhanced the security of the application by having OTP and proper session handling mechanism where a refresh token is ' +
            'generated 6 minutes after user login and the user is logged out.',
            'Password of the user is hashed based on SHA256 algorithm and hash is stored in the database.',
            'Used dedicated user private keys for critical transactions (transaction amount greater than 5000$).'
          ],
          src: ['Source Code',
            'https://github.com/PragnaMunagala/Software_security']
        }
      ],
      show: false
    },
    {
      category: 'Kernel Programming',
      project: [
        {
          title: 'Device Driver Implementation in Linux',
          lang: ['Programming Language', 'C'],
          desc: [
            'Developed a user library and i2c client device driver for EEPROM I/O operations.' +
            'In addition, the user library and kernel driver will light up an led whenever EEPROM is busy.',
            'Developed multi-threaded user application and Serial Peripheral Interface(SPI) device driver to generate an animation on ' +
            '8x8 LED matrix based on distance of an object measured using ultrasonic sensor'
          ],
          src: ['Source Code', 'https://github.com/PragnaMunagala/ESP']
        },
        // {
        //   title: 'Event and Signal Handling in Linux',
        //   lang: ['Programming Language', 'C'],
        //   desc: [
        //     'Events from input devices like mouse, keyboard are captured to  etc.',
        //     'Used Kernelshark to show the timestamp of a signal handler associated to a running, runnable, blocked and delayed thread.',
        //     'Developed a library that allows SIGIO signal being delivered to all the registered threads.'
        //   ],
        //   src: []
        // // },
        // {
        //   title: 'Real Time tasks',
        //   lang: ['Programming Language', 'C'],
        //   desc: ['test', 'test'],
        //   src: []
        // },
        {
          title: 'Zephyr Programming',
          lang: ['Programming Language', 'C'],
          desc: [
            'Implemented an application on Zephyr OS installed on Intel Galileo Gen2 SOC, to track the real time position of an object ' +
            'using gyroscope and accelerometer sensors.',
            'As the sensor data is collected in real time, Kalman filter is used to mitigate the noise.',
            'Position and orientation of the object is calculated using linear acceleration and angular velocity values using I2C bus.',
            'Object movement is captured using gyroscope and accelerometer sensors and applied Kalman filter for state estimation.',
            'The distance of the object is measured using Ultra-sonic sensor.',
          ],
          src: ['Source Code', 'https://github.com/PragnaMunagala/Real-Time-Embedded-Systems/tree/master/Zephyr_RTOS']
        }
      ],
      show: false
    },
    {
      category: 'Computer Architecture',
      project: [
        {
          title: 'Cache Replacement Policy',
          lang: ['Programming Language', 'C'],
          desc: [
            'Implemented cache replacement policies to decide which cache line should be evicted before replacing it with new cache line ' +
            'from memory.',
            'Simple scalar simulator is used as a framework to plugin the algorithm and running the benchmarks.',
            'Algorithms implemented are Partial Least Recently Used (P - LRU) and Static Re-Reference Interval Prediction (SRRIP).',
            'The above two algorithms are compared based on cache miss rate for different variations of cache block size and set ' +
            'associativity.',
            'Benchmarks used are anagram, gcc and go.'
          ],
          src: ['Source Code', 'https://github.com/PragnaMunagala/Computer-Architecture/tree/master/Cache_Replacement_Policy']
        },
        {
          title: 'Branch Prediction',
          lang: ['Programming Language', 'C'],
          desc: [
            'Implemented branch prediction, where the program counter of the upcoming instruction is predicted.',
            'Simple scalar simulator is used as a framework to plugin the algorithm and running the benchmarks.',
            'Predictors implemented are Optimized Geometric History Length (O-GEHL) predictor and Tournament branch predictor.',
            'The above predictors are compared using prediction accuracy and IPC (Instructions per cycle) metrics using gcc, go and ' +
            'anagram benchmarks.'
          ],
          src: ['Source Code',
            'https://github.com/PragnaMunagala/Computer-Architecture/tree/master/Branch_Prediction']
        }
      ],
      show: false
    },
    // {
    //   category: 'Digital Image and Video Processing',
    //   project: [
    //     {
    //       title: 'Image Filtering',
    //       desc: ['test', 'test']
    //     },
    //     {
    //       title: 'Android Application - Image',
    //       desc: ['test', 'test']
    //     }
    //   ],
    //   show: false
    // }
  ];

  constructor() { }

  ngOnInit() {
  }

  selectedRow(item, text) {
    this.projects[item].show = text;
    // for (let i = 0; i < this.projects.length; i++) {
    //   if (i !== item) {
    //     this.projects[i].show = false;
    //   }
    // }
  }
  options(text) {
    for (let i = 0; i < this.projects.length; i++) {
        this.projects[i].show = text;
    }
  }
}
