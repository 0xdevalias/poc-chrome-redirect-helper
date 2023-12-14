// Note: For this to work, the 'declarativeNetRequestFeedback' permission is required
chrome.declarativeNetRequest.onRuleMatchedDebug.addListener((info) => {
  console.log('Rule matched:', info);
});
