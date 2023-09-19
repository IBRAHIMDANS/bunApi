import { test, expect, mock } from "bun:test";

test("2 + 2", () => {
    expect(2 + 2).toBe(4);
});
test("2 + 2 NOK", () => {
    expect(2 + 2).toBe(5);
});

const random = mock(() => Math.random());

test("random", async () => {
    const val = random();
    expect(val).toBeGreaterThan(0);
    expect(random).toHaveBeenCalled();
    expect(random).toHaveBeenCalledTimes(1);
});
