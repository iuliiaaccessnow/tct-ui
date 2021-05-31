#if RCT_DEV
#import <React/RCTDevLoadingView.h>
#endif

// ...

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef FB_SONARKIT_ENABLED
  InitializeFlipper(application);
#endif

  [ReactNativeNavigation bootstrapWithDelegate:self launchOptions:launchOptions];

// Add this
#if RCT_DEV
  [[ReactNativeNavigation getBridge] moduleForClass:[RCTDevLoadingView class]];
#endif
  
  return YES;
}