## CSS

### 3 Pillars
1. Responsive Design
  - fluid layouts
  - media queries
  - responsive images
  - correct units
  - desktop v. mobile first
2. Maintainable/Scalable Code
  - Clean/ Readable
  - Reusable
  - Organized
  - Class names
  - HTML markup structure
3. Web Performance
  - Limit data user has to download to increase speed
  - preprocessor are important here
  - reduce the use of images and compress them

### How it works...
1. Browser loads HTML and parses
2. Browser builds Document Object Model (DOM)
3. Finds scripts in head including CSS
  - Resolve conflicts via cascade
  - Process values
  - Stored in CSS Object model to build the render tree and page is loaded

### How CSS is parsed
- e.g.: selector (.my-class) and declaration block ( everything in {})
```
.my-class {
  color: blue;
  text-align: center;
  font-size: 20px;
}
```  
1. Resolve Conflicts
  - Cascade: process of combining stylesheets and declarations
    - Author declarations, User declarations, Browser declarations
  - Cascade works on Importance -> Specificity -> Source Order  
  - Specificity order is Inline -> Ids -> Classes -> Elements
  - If all cascades without conflicts, CSS will be read in order
  - ```!important``` is a last resource
  - Inline styles always have priority over stylesheets

### Value Processing
  - declared value -> cascade value -> specified value -> computed value -> used value -> actual value   
  - rem is a relative unit much like '%' and relative to the browser default
  - inheritance: some values are inherited from the parent element unless something more specific is declared

### Unit Conversion
  - %: 150% -> x% * parent's computed size -> result (e.g. 150% of 16px font-size on parent will be 24px )
  - 3em -> x * current element computed size or parent size
  - 10rem -> x * root
  - vh = view height of viewport
  - vw = view width of viewport

### Inheritance
  - if no cascade or specific value exists, the value of a property in a child is inherited from the parent
  - computed value gets inherited, not the decared value!
  - Inheritance only works if no one declares a value for that property
  - 'inherit' keyword can force inheritance on a certain property
  - 'inital' keywork resets a property to it's inital value 
