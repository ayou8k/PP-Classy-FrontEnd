#!/bin/bash
test=$2
module_name=$1
if [ $test == 'test' ]
then
	ng g m $module_name --routing -d 	
	cd $module_name
	mkdir data $module_name-components	
	cd data 
	ng g i $module_name -d
	ng g s $module_name -d
	cd ..
	rm -rf data
	cd $module_name-components 
	ng g c $module_name-list -d 
	ng g c $module_name-add -d
	ng g c $module_name-edit -d
	cd ..
	rm -rf  $module_name
else
        ng g m $module_name --routing
        cd $module_name
        mkdir data $module_name-components
        cd data
        ng g i $module_name
        ng g s $module_name
        cd ../$module_name-components
        ng g c $module_name-list
        ng g c $module_name-add
        ng g c $module_name-edit
fi
