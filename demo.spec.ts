it("Promise-based. Passed", () => {
  const res = Promise.reject(new Error("Task failed"));

  expect(2).toBe(2);

  return res.catch(() => {});
});

it("Promise-based. Should fail with correct assertion error (3 != 2)", () => {
  const res = Promise.reject(new Error("Task failed"));

  expect(3).toBe(2);

  return res.catch(() => {});
});

it("Async. Passed", async () => {
  const res = Promise.reject(new Error("Task failed"));

  expect(2).toBe(2);

  await res.catch(() => {});
});

it("Async. Should fail with correct assertion error (3 != 2)", async () => {
  const res = Promise.reject(new Error("Task failed"));

  expect(3).toBe(2);

  await res.catch(() => {});
});
