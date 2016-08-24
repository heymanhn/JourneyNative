# JourneyNative
Mobile frontend for the Journey app. Currently supports iOS only. Written in React Native.

## NOTE - Self-signed SSL certificates
Add the following code to `RCTNetwork.xcodeproj/RCTHTTPRequestHandler.m`, beneath the line `#pragma mark - NSURLSession delegate`:

```
- (void)URLSession:(NSURLSession *)session didReceiveChallenge:(NSURLAuthenticationChallenge *)challenge completionHandler:(void (^)(NSURLSessionAuthChallengeDisposition disposition, NSURLCredential *credential))completionHandler
{
  completionHandler(NSURLSessionAuthChallengeUseCredential, [NSURLCredential credentialForTrust:challenge.protectionSpace.serverTrust]);
}
```

This function allows self-signed SSL certificates to work with HTTPS requests from the iOS app.
