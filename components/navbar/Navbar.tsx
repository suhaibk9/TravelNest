import NavSearch from './NavSearch';
import LinksDropdown from './LinksDropdown';
import DarkMode from './DarkMode';
import Logo from './Logo';
function Navbar() {
  return (
    //border-b = border-bottom
    <nav className="border-b">
      <div className="container flex flex-col sm:flex-row  sm:justify-between sm:items-center flex-wrap gap-4 py-8">
        <Logo />
        <NavSearch />
        <div className="flex gap-4 items-center">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

/**
 Breakdown of Classes:

sm: It doesn't mean for small screen but rather >= small screen i.e. 640px and above.

container: This class likely applies a maximum width and centers the content horizontally, ensuring it doesn't overflow the viewport.

flex: This class establishes a flexbox container, enabling flexible layout and alignment of its child elements.

flex-col: This class sets the flexbox container to display its items in a column layout.

sm:flex-row: This class is a media query that changes the display to a row layout for screen sizes that are at least sm (small) or larger.

sm:justify-between: This class is also a media query, and it aligns the child elements within the flexbox container so that they are evenly distributed with the first and last items positioned at the edges of the container.

sm:items-center: This class is another media query, and it vertically aligns the child elements within the flexbox container to the center.

flex-wrap: This class allows the child elements to wrap to the next line if they don't fit within the container, preventing horizontal overflow.

gap-4: This class adds a gap of 4 units (likely pixels) between each child element.

 */
