import { Input } from '../ui/input';
function NavSearch() {
  return (
    <Input
      type="text"
      placeholder="Find your next getaway..."
      className="max-w-xs dark:bg-muted"
    />
  );
}

export default NavSearch;
/**
 max-w-xs: This class sets the maximum width of the element to a small size, typically around 20rem (320px). This ensures that the element doesn't exceed this width, preventing it from taking up too much space on the page.
dark:bg-muted: This class is a media query that applies the bg-muted class only when the page is in dark mode. The bg-muted class likely sets the background color to a muted or subdued tone, making it more visually appealing and readable in low-light conditions.
 */
