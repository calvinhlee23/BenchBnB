export const BenchConstants = {
  RECEIVE_BENCHES: "RECEIVE_BENCHES",
  REQUEST_BENCHES: "REQUEST_BENCHES"
};

// for middleware
export const requestBenches = () => ({
  type: BenchConstants.REQUEST_BENCHES
});

// for store's dispatch
export const receiveBenches = (benches) => ({
  type: BenchConstants.RECEIVE_BENCHES,
  benches: benches
});
