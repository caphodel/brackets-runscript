#Brackets Run Script extension

Use it to run a selected/all text from opened document as JS inside brackets without opening developer tools.

Usefull if you developing a brackets extension or just to try/test your script inside brackets.

especially if you have extension like console plus (https://github.com/sixertoy/brackets-console-plus), so you don't have to open developer console at all.

Now with Python, Ruby and PHP support!!! Just make sure that you have Python, Ruby and PHP installed on your system and Python, Ruby and PHP path already set (you can invoke python and PHP from cmd).

#Usage

Just select the text that you want to run -> right click -> Run Script as JS/Python/PHP/Ruby.
or
Right click -> Run Script as JS/Python/PHP/Ruby, if you want to run all text in opened document

For running a php script, it must have a php tag (<?php ?>) in your document/selected text, example:
```php
<?php 
    print "Hello word";
?>
```
if you select those script it will be printed "Hello word" on the console.

You can do this too:
```php
this text is not from php code, 
<?php
    echo "this text is from php";
?>
```
will be printed "this text is not from php code, this text is from php" in javascript console.
#Todo

- ~~Run script as Python~~
- ~~Run script as PHP~~
- ~~Run script as Ruby~~
- Run script as Perl
- Run script as Lua

#Requested Functionality
Added quick run (press Ctrl-Shift-R for running script) request by https://github.com/Hirse issue https://github.com/caphodel/brackets-runscript/issues/1