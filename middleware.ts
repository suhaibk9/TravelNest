import {
  clerkMiddleware,
  createRouteMatcher,
} from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/bookings(.*)',
  '/checkout(.*)',
  '/favorites(.*)',
  '/profile(.*)',
  '/rentals(.*)',
  '/reviews(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};
//https://lucky-hippo-72.accounts.dev/sign-in?redirect_url=http%3A%2F%2Flocalhost%3A3000%2Fprofile