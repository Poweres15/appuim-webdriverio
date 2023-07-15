describe("Android Element", () => {
  it("Find Element by assessibility id", async () => {
    const appOptions = await $("~App");
    await appOptions.click();
    await expect(await $("~Action Bar")).toBeDisplayed();
  });
});
