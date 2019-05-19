# NJ-web-design

A Design-API using CSS and JavaScript inspirited from Microsoft Fluent Design

## Developers:
* [JAcoder7](https://github.com/JAcoder7 "go to his github-accont")
* [Ncoder77](https://github.com/Ncoder77 "go to his github-accont")

## Initialize

***When you use our design you must first run the JavaScript-function "init();" at the bottom of your html-code:***    
```<script>init();</script>```

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
Use the ```<nav>``` tag and insert ```<elem onclick="toggle_menu()"></elem>``` as first element.  
Then insert elements with the tag ```<elem>```.
Add  ```onclick="windowChange(window_num)"``` to the ```<elem>``` tag and insert the number of the window starting with 0.  

To add a window simply add ```<div class="window"> yourCode </div>``` and put your code between the two tags.  
#### Example:
```
<nav>
    <elem onclick="toggle_menu();"></elem> <!--Menubutton-->
    <div onclick="windowChange(0)">my new window</div>
</nav>
<div class="window"> <h1>my new window</h1> </div>
```
  
## Icon

We've also added a ```ico``` css-class. It uses the icons from the "Segoe MDL2 Assets" font.  
Simply add a ```span``` tag and add the class:  
```<span class="ico">  </span>```  
Between the two tags you can add your icon from Segoe MDL2 Assets.

## Box

To add a simple box, use the ```div``` tag and enter the class "NJbox".

## comments

To add a comment use the class "note".

## image

We have styled images wich you can use with the class ```NJ-design```.
