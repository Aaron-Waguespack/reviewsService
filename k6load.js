import { http } from 'k6/http';
import { check, sleep } from 'k6';
// import { Counter, Rate } from 'k6/metrics';

// const CounterErrors = new Counter('Errors');
// const ErrorRate = new Rate('error_rate');

export const options = {
  stages: [
    { duration: '30s', target: 20 },
    // { duration: '1m30s', target: 10 },
    // { duration: '20s', target: 0 },
  ],
//   thresholds: {
//     error_rate: ['rate<0.1'],
//   },
};

export default function () {
  const res = http.get('http://127.0.0.1:3020/reviews/:id/metas');
  //   const success = check(res, {
  //     'status is 200': (r) => r.status === 200,
  //   });
  //   if (!success) {
  //     ErrorCount.add(1);
  //     ErrorRate.add(true);
  //   } else {
  //     ErrorRate.add(false);
  //   }

  sleep(0.5);
}
