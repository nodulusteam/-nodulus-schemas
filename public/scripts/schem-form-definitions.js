/*                 _       _           
                 | |     | |          
  _ __   ___   __| |_   _| |_   _ ___ 
 | '_ \ / _ \ / _` | | | | | | | / __|
 | | | | (_) | (_| | |_| | | |_| \__ \
 |_| |_|\___/ \__,_|\__,_|_|\__,_|___/
 @nodulus open source | ©Roi ben haim  ®2016    
 */


var schemaBinder = new  function () {

    var _this = this;
    _this.schemaFormDefinitions = 
 [
        {
            "type": { name: "default" },
            "key": "default",
            "validTypes": ["string"]

        },

        {
            "type": { name: "number" },
            "key": "default",
            "validTypes": ["number"]

        },

        {
            "type": { name: "array" },
            "key": "array",
            "enum": [],
            "lookup": {},
            "validTypes": ["array"]

        },

        {
            "type": { name: "table" },
            "key": "table",
            "enum": [],
            "lookup": {},
            "validTypes": ["array"]

        }, 
        {
            "type": { name: "grid" },
            "key": "grid",
            "enum": [],
            "lookup": {},
            "validTypes": ["array"]

        },       
    
    
    
        
        {
            "type": { name: "array" },
            "key": "array",
            "enum": [],
            "lookup": {},
            "validTypes": ["array"]

        },
        {
            "type": { name: "selectObj" },
            "key": "selectObj",
            "lookup": {},
            "validTypes": ["object", "array"]
					
        }, 
        {
            "type": { name: "select" },
            "key": "select",
            "enum": [],
            "lookup": {},
            "validTypes": ["string", "boolean"]
							
        },
        {
            "type": { name: "summernote" } ,
            "key": "summernote",
            "format": "format-multiline",
            ckeditor: {
                skin: 'Moono',
                toolbar : 'Basic'
            },
            "validTypes": ["string"]
        },

        {
            "type": { name: "ckeditor" } ,
            "key": "ckeditor",
            ckeditor: {
                skin: 'Moono',
                toolbar : 'Basic'
            },
            "validTypes": ["string"]
        },
         
        {
            "type": { name: "datepicker" } ,
            "key": "datepicker",
            "dateFormat": "dd.MM.yyyy",
            "format" : "date",
            "default" : new Date(),
            "validTypes": ["date"]

        },
         
        {
            "type": { name: "checkbox" } ,
            "key": "checkbox",
            "validTypes": ["boolean"],
            "default": true
                             

        },
        {
            "type": { name: "radios" } ,	
            "key": "radios",	
            "enum": [],
            "validTypes": ["string", "boolean"]

        },
						
        {
            "type": { name: "checkboxes" } ,	
            "key": "checkboxes",
            "enum": [],
            "lookup": {},
            "validTypes": ["string", "array"]

        },
						
        {
            "type": { name: "textarea" } ,	
            "key": "textarea",
            "validTypes": ["string"]

        },
        {
            "type": { name: "number" } ,	
            "key": "number",
            "validTypes": ["string", "array",]

        },
        {
            "type": { name: "password" },	
            "key": "password",
            "validTypes": ["string"]

        },
        {
            "type": { name: "ace" },	
            "key": "ace",
            "validTypes": ["string"]
        },
        {
            "endpoint": "/cms/fileupload",
            
            "type": { name: "nwpFileUpload" },
            "key": "nwpFileUpload",
            "title": "Image",
            
            "format": "singlefile",
            
            "pattern": {
                "mimeType": "image/*",
                "validationMessage": "Falscher Dateityp: "
            },
            "maxSize": {
                "maximum": "2MB",
                "validationMessage": "Erlaubte Dateigröße überschritten: ",
                "validationMessage2": "Aktuelle Dateigröße: "
            },
            "maxItems": {
                "validationMessage": "Es wurden mehr Dateien hochgeladen als erlaubt."
            },
            "minItems": {
                "validationMessage": "Sie müssen mindestens eine Datei hochladen"
            }        ,
            "validTypes": ["array"]
        },
    ];

    _this.schemaFormDefinitionsObj = {};
    _this.schemaFormDefinitionsSupport = {};
    _this.bind = function (definition_to_add)
    {
        if (definition_to_add)
            _this.schemaFormDefinitions.push(definition_to_add);


        _this.schemaFormDefinitionsObj = {};
        _this.schemaFormDefinitionsSupport = {};
        
        
        for (var i = 0; i < _this.schemaFormDefinitions.length; i++) {
            _this.schemaFormDefinitionsObj[_this.schemaFormDefinitions[i].key] = _this.schemaFormDefinitions[i];
        }
        
       
        for (var i = 0; i < _this.schemaFormDefinitions.length; i++) {
            for (var support = 0; support < _this.schemaFormDefinitions[i].validTypes.length; support++) {
                if (_this.schemaFormDefinitionsSupport[_this.schemaFormDefinitions[i].validTypes[support]] === undefined)
                    _this.schemaFormDefinitionsSupport[_this.schemaFormDefinitions[i].validTypes[support]] = [];
                _this.schemaFormDefinitionsSupport[_this.schemaFormDefinitions[i].validTypes[support]].push(_this.schemaFormDefinitions[i]);
            }
        }
    }

    _this.bind();
}()

 





 

//alert(JSON.stringify(schemaFormDefinitionsSupport));