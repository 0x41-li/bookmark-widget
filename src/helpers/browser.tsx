export function openNewTab(url: string) {
  const newTab = window.open(url, "_blank");
  newTab?.focus();
}
