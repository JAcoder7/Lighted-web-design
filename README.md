# NJ-web-design

A Design-API inspirited from Microsoft Fluent Design

## Developers:
* [JAcoder7](https://github.com/JAcoder7 "go to his github-accont")
* [Ncoder77](https://github.com/Ncoder77 "go to his github-accont")

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

## Icon

We've also added a ```ico``` css-class. It uses the icons from the "Segoe MDL2 Assets" font.  
Simply add a ```span``` tag and add the class:  
```<span class="ico">  </span>```  
Between the two tags you can add your icon from Segoe MDL2 Assets.