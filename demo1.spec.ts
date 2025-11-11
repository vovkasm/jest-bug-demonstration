it("Async. Should fail with correct assertion error (3 != 2)", async () => {
  const res = Promise.reject(new Error("Task failed"));

  expect(3).toBe(2);

  await res.catch(() => {});
});
