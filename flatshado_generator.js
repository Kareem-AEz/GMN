`use strict`;
// let shadow = document.querySelector('.flat-shadow');
// let offsetArr = [];
// let shadowArr = [];
// let increment = 0.2;
// let length = 50;

// for (let i = 0; i < length; i++) {
//   let offset =
//     (i * increment).toFixed(1) + 'px ' + (i * increment).toFixed(1) + 'px 0';
//   offsetArr.push(offset);
//   shadowArr.push(offset + ' yellow');
// }

// for (let i = 0; i < length; i++) {
//   shadowArr.push(offsetArr[i] + ' 3px green');
// }

// shadow.classList.add('dynamic-shadow'); // Add dynamic class
// shadow.style.boxShadow = shadowArr.join(', ');

// shadow.addEventListener('mouseenter', () => {
//   shadow.classList.add('dynamic-shadow'); // Ensure dynamic class is added
// });

// shadow.addEventListener('mouseleave', () => {
//   shadow.classList.remove('dynamic-shadow'); // Remove dynamic class if needed
// });

// console.log(shadowArr);

/*
let shadow = document.querySelector('.shadow');
let shadowOutline = 3;

let shadowOfst = 0.2;
let shadowLength = 5;
let shadowArr = [];
let shadowOfstArr = [];
let shadowArrOutline = [];

let shadowOfst_hover = 0.4;
let shadowLength_hover = 5;
let shadowArr_hover = [];
let shadowOfstArr_hover = [];
let shadowArrOutline_hover = [];

// calculating the offset of each layer
for (let i = 0; i < shadowLength; i++) {
  if (i) {
    shadowOfstArr.push((i * shadowOfst).toFixed(1));

    shadowArr.push(
      `${shadowOfstArr[i - 1]}px ${shadowOfstArr[i - 1]}px 0 yellow`
    );
    shadowArrOutline.push(
      `${shadowOfstArr[i - 1]}px ${
        shadowOfstArr[i - 1]
      }px 0 ${shadowOutline}px chocolate`
    );
  }
}

for (let i = 0; i < shadowLength_hover; i++) {
  if (i) {
    shadowOfstArr_hover.push((i * shadowOfst_hover).toFixed(1));

    shadowArr_hover.push(
      `${shadowOfstArr_hover[i - 1]}px ${shadowOfstArr_hover[i - 1]}px 0 yellow`
    );
    shadowArrOutline_hover.push(
      `${shadowOfstArr_hover[i - 1]}px ${
        shadowOfstArr_hover[i - 1]
      }px 0 ${shadowOutline}px chocolate`
    );
  }
}

console.log(shadowOfstArr);
console.log(shadowOfstArr_hover);

console.log(
  `box-shadow: ${shadowArr.join(',')}, ${shadowArrOutline.join(',')};`
);
console.log(
  `box-shadow: ${shadowArr_hover.join(',')}, ${shadowArrOutline_hover.join(
    ','
  )};`
);
*/
/*      -----------Final Version-----------      */
/*
let shadowLength = 8;
let outlineWidth = 3;
let unit = 'px';
let shadowColor = 'yellow';
let outlineColor = 'chocolate';

let shadow = {
  shadowColor: shadowColor,
  outlineColor: outlineColor,
  unit: unit,
  offset: 0.6,
  length: shadowLength,
  outlineWidth: outlineWidth,
  valueArr: [],
  valueOutlineArr: [],
  offsetValueArr: [],
  output: '',
};
let shadow_hover = {
  shadowColor: shadowColor,
  outlineColor: outlineColor,
  unit: unit,
  offset: 1,
  length: shadowLength,
  outlineWidth: outlineWidth,
  valueArr: [],
  valueOutlineArr: [],
  offsetValueArr: [],
  output: '',
};
let shadow_active = {
  shadowColor: shadowColor,
  outlineColor: outlineColor,
  unit: unit,
  offset: 0,
  length: shadowLength,
  outlineWidth: outlineWidth,
  valueArr: [],
  valueOutlineArr: [],
  offsetValueArr: [],
  output: '',
};

for (let i = 0; i <= shadowLength; i++) {
  let index = i - 1;
  if (i) {
    shadow.offsetValueArr.push((shadow.offset * i).toFixed(1));
    shadow_hover.offsetValueArr.push((shadow_hover.offset * i).toFixed(1));
    shadow_active.offsetValueArr.push((shadow_active.offset * i).toFixed(1));

    shadow.valueArr.push(
      `${shadow.offsetValueArr[index]}${shadow.unit} ${shadow.offsetValueArr[index]}${shadow.unit} 0 ${shadow.shadowColor}`
    );
    shadow.valueOutlineArr.push(
      `${shadow.offsetValueArr[index]}${shadow.unit} ${shadow.offsetValueArr[index]}${shadow.unit} 0 ${shadow.outlineWidth}${unit} ${shadow.outlineColor}`
    );

    shadow_hover.valueArr.push(
      `${shadow_hover.offsetValueArr[index]}${shadow_hover.unit} ${shadow_hover.offsetValueArr[index]}${shadow_hover.unit} 0 ${shadow_hover.shadowColor}`
    );
    shadow_hover.valueOutlineArr.push(
      `${shadow_hover.offsetValueArr[index]}${shadow_hover.unit} ${shadow_hover.offsetValueArr[index]}${shadow_hover.unit} 0 ${shadow_hover.outlineWidth}${unit} ${shadow_hover.outlineColor}`
    );

    shadow_active.valueArr.push(
      `${shadow_active.offsetValueArr[index]}${shadow_active.unit} ${shadow_active.offsetValueArr[index]}${shadow_active.unit} 0 ${shadow_active.shadowColor}`
    );
    shadow_active.valueOutlineArr.push(
      `${shadow_active.offsetValueArr[index]}${shadow_active.unit} ${shadow_active.offsetValueArr[index]}${shadow_active.unit} 0 ${shadow_active.outlineWidth}${unit} ${shadow_active.outlineColor}`
    );
  }
}

shadow.output = `${shadow.valueArr.join(',')}, ${shadow.valueOutlineArr.join(
  ','
)}`;

shadow_hover.output = `${shadow_hover.valueArr.join(
  ','
)}, ${shadow_hover.valueOutlineArr.join(',')}`;

shadow_active.output = `${shadow_active.valueArr.join(
  ','
)}, ${shadow_active.valueOutlineArr.join(',')}`;

console.log(`box-shadow: ${shadow.output};`);
console.log(`box-shadow: ${shadow_hover.output};`);
console.log(`box-shadow: ${shadow_active.output};`);
*/

/*      -----------Optimized Version-----------      */

let shadowLength = 10;
let outlineWidth = 4;
let shadowOffset = 0.7;
let hoverOffset = 1;
let activeOffset = 0.4;
let unit = 'px';
let shadowColor = '#023047';
let outlineColor = '#fefae0';

let hoverEasing = `
  
  transition-timing-function: cubic-bezier(0.51, 1.95, 0.5, 0.6);
`;
let activeEasing = `
  transition: 0.168s cubic-bezier(0.2, 0, 0.4, 1);
`;

let generateShadow = offset => {
  let shadowValueArr = [];
  let outlineValueArr = [];

  for (let i = 1; i <= shadowLength; i++) {
    let offsetValue = (offset * i).toFixed(1) + unit;

    shadowValueArr.push(`${offsetValue} ${offsetValue} 0 ${shadowColor}`);
    outlineValueArr.push(
      `${offsetValue} ${offsetValue} 0 ${outlineWidth}${unit} ${outlineColor}`
    );
  }
  return `${shadowValueArr.join(',')}, ${outlineValueArr.join(',')} `;
};

let shadowOutput = generateShadow(shadowOffset);
let shadowHoverOutput = generateShadow(hoverOffset);
let shadowActiveOutput = generateShadow(activeOffset);

console.log(`
  .flat-shadow{
    box-shadow: ${shadowOutput};
    transition: box-shadow, transform;
    transition-duration: 0.2681s;
    ${hoverEasing}
  }
`);

console.log(`
  .flat-shadow:hover{
    box-shadow: ${shadowHoverOutput};
    transform: translate(-1.6px, -1.6px);
  }

  `);

console.log(`
  .flat-shadow:active{
    box-shadow: ${shadowActiveOutput};
    transform: translate(0, 0);
    ${activeEasing}
  }
  `);

/*      -----------Injecting CSS into the head-----------      */
/*
// Create a style element
let style = document.createElement('style');
style.type = 'text/css';

// Select the target element (e.g., a button with the class 'my-button')
let className = '.my-shadow';

// Define the CSS for normal, hover, and active states
let css = `
  ${className} {
    box-shadow: ${shadow.output};
    
    transition: box-shadow, transform;
    transition-duration: 0.2681s;
    transition-timing-function: cubic-bezier(0.51, 1.95, 0.5, 0.6);
  }
  
  ${className}:hover {
    box-shadow: ${shadow_hover.output};
    transform: translate(-1.6px, -1.6px);
  }
  
  ${className}:active {
    box-shadow: ${shadow_active.output};

    transform: translate(0, 0);
    transition: 0.168s cubic-bezier(0.2, 0, 0.4, 1);

  }
`;

// Append the CSS to the style element
if (style.styleSheet) {
  style.styleSheet.cssText = css; // For IE
} else {
  style.appendChild(document.createTextNode(css)); // Other browsers
}

// Add the style element to the document head
document.head.appendChild(style);
*/
/*
// Access the first stylesheet in the document (you can choose another if needed)
let stylesheet = document.styleSheets[0]; // Access the first stylesheet in the document

// Define your selectors and the generated box-shadow properties
let className = '.flat-shadow';

// Create the CSS rule for normal state
let normalRule = `${className} {
  box-shadow: ${shadow.output};

  transition: box-shadow, transform;
  transition-duration: 0.2681s;
  transition-timing-function: cubic-bezier(0.51, 1.95, 0.5, 0.6);
}`;

// Create the CSS rule for hover state
let hoverRule = `${className}:hover {
  box-shadow: ${shadow_hover.output};
  transform: translate(-1.6px, -1.6px);
}`;

// Create the CSS rule for active state
let activeRule = `${className}:active {
  box-shadow: ${shadow_active.output};
  transform: translate(0, 0);
  transition: 0.168s cubic-bezier(0.2, 0, 0.4, 1);
}`;

// Insert the CSS rules into the stylesheet
stylesheet.insertRule(normalRule, stylesheet.cssRules.length); // Insert normal state
stylesheet.insertRule(hoverRule, stylesheet.cssRules.length); // Insert hover state
stylesheet.insertRule(activeRule, stylesheet.cssRules.length); // Insert active state
*/
