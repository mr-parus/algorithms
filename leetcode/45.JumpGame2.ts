function jump(A: number[]): number {
  let jumps = 0;
  let current_reach = 0;
  let max_reach = 0;


  for (let i = 0; current_reach < A.length-1; i++) {
    max_reach = Math.max(max_reach, A[i] + i);

    if (i === current_reach) {
      current_reach = max_reach;
      jumps++;
    }
  }

  return jumps;
}
