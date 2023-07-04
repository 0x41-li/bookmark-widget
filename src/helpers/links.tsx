// Code from chatgpt, extracting the company name from the URL
export function extractCompanyNameFromURL(url: string) {
  // Remove the protocol part if present
  const protocolPattern = /^(https?:\/\/)/i;
  let hostname = url.replace(protocolPattern, "");

  // Remove the "www." prefix if present
  hostname = hostname.replace(/^www\./i, "");

  // Extract the company name using regular expressions
  let companyName = "";
  let match;

  // Check if the hostname contains a company name separated by dots
  const dotPattern = /\.[^.]+$/;
  if (dotPattern.test(hostname)) {
    match = hostname.match(/([^.\s]+)\.[^.]+$/);
    if (match) {
      companyName = match[1];
    }
  }

  // Check if the hostname contains a company name separated by hyphens
  const hyphenPattern = /-[^-]+$/;
  if (!companyName && hyphenPattern.test(hostname)) {
    match = hostname.match(/-([^-\s]+)$/);
    if (match) {
      companyName = match[1];
    }
  }

  return companyName.charAt(0).toUpperCase() + companyName.slice(1);
}

// Code from chatgpt, Making sure that a URL has the protocol part
export function ensureUrlProtocol(url: string) {
  // Check if the link starts with a protocol
  if (!/^https?:\/\//i.test(url)) {
    // Add "http://" as the default protocol
    url = "https://" + url;
  }
  return url;
}

// code from chatgpt, check if image loads
// I will use this code to check if the favicon existed
export function doesFaviconExist(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = function () {
      resolve(true); // Favicon exist
    };

    img.onerror = function () {
      resolve(false); // Favicon doesn't exist
    };

    img.src = `${url}/favicon.ico`;
  });
}
