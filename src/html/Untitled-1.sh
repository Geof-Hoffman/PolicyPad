//Todo items 


# 
-autoload state from REGEX file number 
# add  window:
    - Problem Tracking 
    - Options / data edit
   #DOne - load new files
# Add dynamic copy Buttons
   #//done!!!! -Create array of object
****** Issued button click event *****

- check if problem file and if so load file info.
 
   when issue is clicked, if file number and file list, 
    - move issued file number to issued list, 
    - get new file number and remove from list
    - put new file number in filenumber field 
    - save new files list 
    - save new issues list
    - notify, (issued file added to issued list) 
    
    when issued is clicked and no file number but files list,
    - get new file number and remove from list
    - put new file number in filenumber field 
    - save new files list 

   no files list but file number 
   - get issued list,
   - add issued file to list,
   -store new list
   - notify (issued file ) added to issued list

   no files and no list
   - notify no new files, please add files to current files list. 

problem file button click event
   when P is clicked, if file number
    - get problem file array of objects.
    - open window with file number and field for description.
    - prompt for description.  
    - create opject with file number, description and field info 
    - get new file number and remove from file list
    - put new file number in filenumber field 
    - save new files list 
    - save new issue object to problem array
    - notify, (problem file added to problem list) 
    
    when problem is clicked and no file number 
    - get problem file array of objects.
    - open window with file number field and field for description.
    - prompt for description and file number.  
    - create opject with file number, description and field info 
    - get new file number and remove from file list
    - put new file number in filenumber field 
    - save new files list 
    - save new issue object to problem array
    - notify, (problem file added to problem list) 

 Problem file window 
   - get problem file list and display file number, brief description, last touch date 
   - display button to move problem files to current list.  
   - export to csv file button
      - open window with columns checklist. 
      - prompt for columns check boxes.
      - open file save window to save file.
   - close button.
   - clear button. 

Issued files windows
   - display issued files 
   - copy issued files button. 
 
