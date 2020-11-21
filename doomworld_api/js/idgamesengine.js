/**
 * JS to interface with ID archive API.
 * 
 * ?action=getdirs&name=levels/doom2/
 * 
 * v. 2: 
 *  - uses getcontents rather than geddirecoris/getfiles.
 *  - because there are a few cases where directories contain both files and sub-directories.
 * 
 */
var idgamesengine = {
	PROXY_LOCATION : '/proxy/proxy.php',	
	/**
	 * Start the code:
	 * */
	init : function(container){
		let _container = 'doom_container';
		if(container){
			_container = container;
		}
		this.buildSearchForm(_container);
		this.loadContents(false,_container,_container);
		this.spinner = document.createElement('img');
		this.spinner.setAttribute('src','/img/spinner.gif');
		this.container = _container;
	},

	loadContents : function(branch,target,container){
		console.log("load contents to " + target);
		let _url = idgamesengine.PROXY_LOCATION + "?action=getcontents&id=0";
		if(branch){
			_url = idgamesengine.PROXY_LOCATION + "?action=getcontents&name=" + branch;
		};
		console.log($('#'+target).find('div.spinner_wrapper'));
		$('#'+target).find('div.spinner_wrapper').append($(idgamesengine.spinner).clone());
		var _target = target;
		$.ajax({
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            url : _url
        }).done(function(data){
        	/* check whether the response is a directory list: */
        	if(data['content']){
        		if(data['content']['dir']){
        			idgamesengine.buildDirectoryLinks(data,_target,container);
            	}
        		if(data['content']['file']){
        			idgamesengine.buildFileLinks(data,_target,container);
            	};
        	}
        	
        }).fail(function(a,b,c){
        	console.log(a,b,c);
        });
	},
	
	buildSearchForm : function(container){
		let _table = document.createElement('table');
		_table.setAttribute('id','search_options_table');
		let _thead = document.createElement('thead');
		let _tr1 = document.createElement('tr');
		let _th1 = document.createElement('th');
		let _th2 = document.createElement('th');
		let _th3 = document.createElement('th');
		let _th4 = document.createElement('th');
		let _th5 = document.createElement('th');
		let _thtxt1 = document.createTextNode('Query');
		let _thtxt2 = document.createTextNode('Search in');
		let _thtxt3 = document.createTextNode('Sort by');
		let _thtxt4 = document.createTextNode('Sort asc');
		
		let _tbody = document.createElement('tbody');
		let _tr2 = document.createElement('tr');
		let _td1 = document.createElement('td');
		let _td2 = document.createElement('td');
		let _td3 = document.createElement('td');
		let _td4 = document.createElement('td');
		let _td5 = document.createElement('td');
		
		_th1.appendChild(_thtxt1);
		_th2.appendChild(_thtxt2);
		_th3.appendChild(_thtxt3);
		_th4.appendChild(_thtxt4);
		
		_tr1.appendChild(_th1);
		_tr1.appendChild(_th2);
		_tr1.appendChild(_th3);
		_tr1.appendChild(_th4);
		_tr1.appendChild(_th5);
		
		_thead.appendChild(_tr1);
		
		let _sel1 = document.createElement('select');
		_sel1.setAttribute('id','idgames_search_type');
		//type: filename, title, author, email, description, credits, editors, textfile
		let _opt1 = document.createElement('option');
		let _opt2 = document.createElement('option');
		let _opt3 = document.createElement('option');
		let _opt4 = document.createElement('option');
		let _opt5 = document.createElement('option');
		let _opt6 = document.createElement('option');
		let _opt7 = document.createElement('option');
		let _opt8 = document.createElement('option');
		
		let _txt1 = document.createTextNode('Filename');
		let _txt2 = document.createTextNode('Title');
		let _txt3 = document.createTextNode('Author');
		let _txt4 = document.createTextNode('Email');
		let _txt5 = document.createTextNode('Description');
		let _txt6 = document.createTextNode('Credits');
		let _txt7 = document.createTextNode('Editors');
		let _txt8 = document.createTextNode('Textfile');
		
		_opt1.setAttribute('value','filename');
		_opt2.setAttribute('value','title');
		_opt3.setAttribute('value','author');
		_opt4.setAttribute('value','email');
		_opt5.setAttribute('value','description');
		_opt6.setAttribute('value','credits');
		_opt7.setAttribute('value','editors');
		_opt8.setAttribute('value','textfile');
		
		_opt1.appendChild(_txt1);
		_opt2.appendChild(_txt2);
		_opt3.appendChild(_txt3);
		_opt4.appendChild(_txt4);
		_opt5.appendChild(_txt5);
		_opt6.appendChild(_txt6);
		_opt7.appendChild(_txt7);
		_opt8.appendChild(_txt8);
		
		_sel1.appendChild(_opt1);
		_sel1.appendChild(_opt2);
		_sel1.appendChild(_opt3);
		_sel1.appendChild(_opt4);
		_sel1.appendChild(_opt5);
		_sel1.appendChild(_opt6);
		_sel1.appendChild(_opt7);
		_sel1.appendChild(_opt8);
		
		//sort: date, filename, size, rating
		let _sel2 = document.createElement('select');
		_sel2.setAttribute('id','idgames_search_sort');
		let _opt21 = document.createElement('option');
		let _opt22 = document.createElement('option');
		let _opt23 = document.createElement('option');
		let _opt24 = document.createElement('option');
		
		let _txt21 = document.createTextNode('Date');
		let _txt22 = document.createTextNode('Filename');
		let _txt23 = document.createTextNode('Size');
		let _txt24 = document.createTextNode('Rating');

		_opt21.setAttribute('value','date');
		_opt22.setAttribute('value','filename');
		_opt23.setAttribute('value','size');
		_opt24.setAttribute('value','rating');

		_opt21.appendChild(_txt21);
		_opt22.appendChild(_txt22);
		_opt23.appendChild(_txt23);
		_opt24.appendChild(_txt24);

		_sel2.appendChild(_opt21);
		_sel2.appendChild(_opt22);
		_sel2.appendChild(_opt23);
		_sel2.appendChild(_opt24);
		
		//dir(ection): asc, desc
		let _chk4 = document.createElement('input');
		_chk4.setAttribute('type','checkbox');
		_chk4.setAttribute('id','idgames_search_dir');
		_chk4.setAttribute('value','asc');
		
		//$('#'+container).append('<div>TEST</div>');
		let _div = document.createElement('div');
		_div.setAttribute('class','panel-text searchwrapper');
		let _input1 = document.createElement('input');
		_input1.setAttribute('id','idgames_search_field');
		_input1.setAttribute('placeholder','Enter search term here');
		
		let _input2 = document.createElement('input');
		_input2.setAttribute('id','idgames_search_submit');
		_input2.setAttribute('title','Search');
		_input2.setAttribute('value','Go');
		_input2.setAttribute('type','submit');
		
		let _input3 = document.createElement('input');
		_input3.setAttribute('id','idgames_search_reset');
		_input3.setAttribute('title','Reload browser');
		_input3.setAttribute('value','Tree');
		_input3.setAttribute('type','submit');
		
		_td1.appendChild(_input1);
		_td2.appendChild(_sel1);
		_td3.appendChild(_sel2);
		_td4.appendChild(_chk4);
		_td5.appendChild(_input2);
		_td5.appendChild(_input3);
		
		_tr2.appendChild(_td1);
		_tr2.appendChild(_td2);
		_tr2.appendChild(_td3);
		_tr2.appendChild(_td4);
		_tr2.appendChild(_td5);
		
		_tbody.appendChild(_tr2);
		
		_table.appendChild(_thead);
		_table.appendChild(_tbody);
		
		_div.appendChild(_table);

		$('#'+container).append(_div);
		
		/* and append click handler */
		$('#idgames_search_submit').click(function(){
			if($('#idgames_search_field').val()){
				let _dir = 'desc';
				if($('#idgames_search_dir').is(':checked')){
					_dir = 'asc';
				}
				idgamesengine.doSearch($('#idgames_search_field').val(),$('#idgames_search_type').val(),$('#idgames_search_sort').val(),_dir);
			}
		});
		$('#idgames_search_reset').click(function(){
			/* reload tree browser */
			console.log($('#doomworld_api ul.doombrowser').length);
			$("#doom_container > ul").remove();
			if(!$('#doomworld_api ul.doombrowser').length){
				/* remove elements created by the search: */
				$('.searchwrapper').remove();
				
				/* and re-apply the tree root: */
				idgamesengine.init(idgamesengine.container);
			}
		});
	},

	doSearch : function(query,type,sort,dir){
		let opts = [];
		if(type){
			opts.push('type='+type);
		}
		if(sort){
			opts.push('sort='+ sort);
		}
		if(dir){
			opts.push('dir='+dir);
		}
		let _opts = '&'+opts.join('&');
		
		console.log(idgamesengine.PROXY_LOCATION + "?action=search&query="+query + _opts);
		
		$.ajax({
            type: "GET",
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            url : idgamesengine.PROXY_LOCATION + "?action=search&query="+query + _opts
        }).done(function(data){
        	/* and call the files render rouotine: */
        	console.log(data)
        	/* remove file tree first */
        	$('#'+idgamesengine.container + ' ul.doombrowser').remove();
        	/* clear any preious search */
        	$('#search_result_list').remove();
        	
        	idgamesengine.buildFileLinks(data,idgamesengine.container,true);
        	
        }).fail(function(a,b,c){
        	console.log(a,b,c);
        });
	},
	
	buildDirectoryLinks : function(data,  target,container,_clear){
		var _out = "";
		var _ul = document.createElement('ul');
		_ul.setAttribute('class','doombrowser');
		if(data.content.dir){
			/* If only one entry, we don't get an array, we get an object: */
			let _dirs = new Array();
			if(data.content.dir[0] === undefined){
				_dirs[0] = data.content.dir;
			}
			else{
				_dirs = data.content.dir;
			}
			for(var a=0;a<_dirs.length; a++){
				var _li = document.createElement('li');
				_li.setAttribute('data-loaded','false');
				_li.setAttribute('id','tree_'+_dirs[a].id);
				var _div1 = document.createElement('div'); /* wrapper for folder icon */
				_div1.setAttribute('class', 'tree-toggler closed');
				_div1.setAttribute('data-loaded','false');
				_div1.setAttribute('data-target','tree_'+_dirs[a].id);
				_div1.setAttribute('data-directory',_dirs[a].name);
				_div1.setAttribute('data-id',_dirs[a].id);
				var _txt = document.createTextNode(_dirs[a].name.split(/\//g).reverse()[1]);
				var _i = document.createElement('i');
				_i.setAttribute('class','fas fa-folder');
				var _div2 = document.createElement('div'); /* wrapper AJAX loading spinner */
				_div2.setAttribute('class', 'spinner_wrapper');
				_div1.appendChild(_i);
				_li.appendChild(_div1);
				_li.appendChild(_txt);
				_li.appendChild(_div2);
				_ul.appendChild(_li);
			}
			var _target = document.getElementById(target);
			_target.appendChild(_ul);
			
			/* remove spinner when done building the branch: */
			$(_target).find('div.spinner_wrapper > img').remove();
			
			/* now append click handlers: */
	    	$('#'+container+' li > div').each(function(){
	    		$(this).off('click').click(function(){
	    			if($(this).attr('data-loaded') === 'false'){
	    				console.log($(this).parent());
	    				$(this).parent().addClass('loaded');
	    				$(this).find('i').first().removeClass('fa-folder').addClass('fa-folder-open');
	    				$(this).attr({'data-loaded':'true'});
	    				idgamesengine.loadContents($(this).attr('data-directory'),$(this).attr('data-target'),container);
	    			}
	    			else{
	    				idgamesengine.toggleBranch($(this).attr('data-target'));
	    			}
	    		});
	    	});
		}
		else{
			console.log('not a directory listing');
		}
	},

	buildFileLinks : function(data, target,isSearchResult){
		var _target = document.getElementById(target);
		var _out = "";
		var ftp_root = "ftp://ftp.fu-berlin.de/pc/games/idgames/";
		var _ul = document.createElement('ul');
		if(isSearchResult){
			_ul.setAttribute('id','search_result_list');
			_ul.setAttribute('class','searchwrapper');
		}
		if(data.content.file){
			/* as for directories, if only one result, we don't get an array... */
			let _files = new Array();
			if(data.content.file[0] === undefined){
				_files[0] = data.content.file;
			}
			else{
				_files = data.content.file;
			}
			for(var a=0;a<_files.length; a++){
				var _li = document.createElement('li');
				_li.setAttribute('data-loaded','false');
				_li.setAttribute('id','tree_'+_files[a].id);
				
				var _div = document.createElement('div');
				_div.setAttribute('class', 'tree-toggler closed');
				_div.setAttribute('data-loaded','false');
				_div.setAttribute('data-target','tree_'+_files[a].id);
				
				var _span = document.createElement('span');
				let _desc = '[no description found]';
				if(_files[a].description){
					_desc = _files[a].description.replace(/\<br\>/g,'\n');
				}
				let _title = _files[a].filename;
				if(_files[a].title){
					_title = _files[a].title
				}
				var _a1 = document.createElement('a');
				_a1.setAttribute('title',_desc);
				_a1.setAttribute('href',ftp_root + _files[a].dir + _files[a].filename);
				
				var _txt = document.createTextNode(_title);
				_a1.appendChild(_txt);
				_li.appendChild(_div);
				_li.appendChild(_a1);
				_ul.appendChild(_li);
			}
			_target.appendChild(_ul);
			/* remove spinner when done building the childs: */
			$(_target).find('div.spinner_wrapper > img').remove();
		}
	},
	
	/**
	 * toggle visibility of child <li> elements 
	 * and also the folder class of the toggler <div>
	 * */
	toggleBranch : function(togglerId){
		var _things = $('#'+togglerId).find('ul');
		console.log(_things);
		$(_things).each(function(){
			console.log($(this));
			if($(this).hasClass('hidden')){
				$('#'+togglerId).find('i').first().removeClass('fa-folder').addClass('fa-folder-open');
				$(this).removeClass('hidden');
			}
			else{
				$('#'+togglerId).find('i').first().removeClass('fa-folder-open').addClass('fa-folder');
				$(this).addClass('hidden');
			}
		});
	},
	
	getQuerystring : function(){
		return(window.location.search);
	}
};
/* and start the engine */
$(function(){
	idgamesengine.init();
});