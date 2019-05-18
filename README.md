# NJ-web-design
A Design-API inspirited from Microsoft Fluent Design

![NJDesgn Image](NJDesign-title-pic.jpg)

## Instructions:

### Developers
* [JAcoder7](https://github.com/JAcoder7 "go to his github-accont")
* [Ncoder77](https://github.com/Ncoder77 "go to his github-accont")
   
### How to use it
This design is based on CSS and Javascript. Here is the Code for implementing the components and html elements. For starting with a project, please download these files:   
```index.html, NJDesgn.css, NJDesign.js```   
For an example page, please download the ```example.html``` file.   
So let's start coding with NJDesign API!

### Components
Already implemented and documentated:
- Button
- header (h1, h2, etc.)
- Drop down (select)
- Progressbar
- Navigation

Comings soon:
- Flexbox Design
- Head-image
- Footer

## Button
The button, you can implement it like that:
``` 
<Button>Text of the button</Button>
```
For Javascript: ``` <Button onclick="yourfunction()"></Button> ```   

## Header
There are multiple headers: h1, h2, h3, ...
The ```<h1>``` tag is very good for the title of a sub-page.

## Drop down
This is the syntax for a drop down selection:
```
<select>
    <option value="value1">option 1</option>
    <option value="value2">option 2</option>
</select>
```
The ```value=""``` is for javascript.

## Progressbar
To add a progessbar, add the tag "div" and change the class to "progressbar" and add an Id.  

```
 <div class="progressbar" id="yourID"></div>
```

Next, run the function progressbar(id, width, progress).
Change the id to the Id from the div and change the width(numbers) and the progress(%).

```
<script>
    progressbar("yourID", width, progress);
</script>
```

## Navigation

We've made a navigation, wich looks nice and is easy to use:  
Use the ```<nav>``` tag and insert ```<elem onclick="toggle_menu()"></elem>``` as first element. Then insert elements with the tag ```<elem>```.
Add  ```onclick="window.location.href = 'yourLink';``` to the ```<elem>``` tag and you are finish!

```
<nav>
    <elem onclick="toggle_menu();"></elem> <!--Menubutton-->
    <div onclick="window.location.href = 'Yourlink'">Name</div>
</nav>
```