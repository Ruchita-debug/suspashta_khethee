Ext.define('MyApp.view.main.Crop_Form', {
		extend: 'Ext.container.Container',
		alias: 'Crop_Form',
		id: 'lessonContainer',
		border: true,
		width: 600,
		
		margin:'10 10 10 10',
		items:[
			{
				xtype:'label',
				html:'<p><h2>Lesson 2.3 : Form example with components</h2></p>'
			},{
				xtype:'form',
				id: 'newForm',
				border: true,
				width: 600,
				items: [
				   {
					  xtype: 'textfield',
					  fieldLabel: 'Text Field'
				   },{
					  xtype: 'displayfield',
					  fieldLabel: 'Display Field'
				   },{
					  xtype: 'textarea',
					  fieldLabel: 'Text Area'
				   },{
					  xtype: 'datefield',
					  fieldLabel: 'Date picker'
				   },{
					  xtype: 'button',
					  text: 'Button'
				   },{
					  xtype: 'fieldcontainer',
					  fieldLabel: 'Radio field',
					  defaultType: 'radiofield',
					  defaults: {
						 flex: 1
					  },
					  layout: 'hbox',
					  items: [{
						 boxLabel: 'A',
						 inputValue: 'a',
						 id: 'radio1'
					  },{
						 boxLabel: 'B',
						 inputValue: 'b',
						 id: 'radio2'
					  },{
						 boxLabel: 'C',
						 inputValue: 'c',
						 id: 'radio3'
					  }]
				   },{
					  xtype: 'fieldcontainer',
					  fieldLabel: 'Check Box Field',
					  defaultType: 'checkboxfield',
					  
					  items: [{
						 boxLabel: 'HTML',
						 inputValue: 'html',
						 id: 'checkbox1'
					  },{
						 boxLabel: 'CSS',
						 inputValue: 'css',
						 checked: true,
						 id: 'checkbox2'
					  },{
						 boxLabel: 'JavaScript',
						 inputValue: 'js',
						 id: 'checkbox3'
					  }]
				   },{
					  xtype: 'hiddenfield',
					  name: 'hidden field ',
					  value: 'value from hidden field'
				   },{
					  xtype: 'numberfield',
					  anchor: '100%',
					  fieldLabel: 'Numeric Field',
					  maxValue: 99,
					  minValue: 0
				   },{
					  xtype: 'spinnerfield',
					  fieldLabel: 'Spinner Field',
					  step: 6,
					  
					  // override onSpinUp (using step isn't necessary)
					  onSpinUp: function() {
						 var me = this;
						 
						 if (!me.readOnly) {
						 var val = me.step;    // set the default value to the step value
							if(me.getValue() !== '') {
							   val = parseInt(me.getValue().slice(0, -5));   // gets rid of ' Pack'
							}                          
							me.setValue((val + me.step) + ' Pack');
						 }
					  },
					  // override onSpinDown
					  onSpinDown: function() {
						 var me = this;
						 if (!me.readOnly) {
							if(me.getValue() !== '') {
							   val = parseInt(me.getValue().slice(0, -5));   // gets rid of ' Pack'
							}            
							me.setValue((val - me.step) + ' Pack');
						 }
					  }
				   },{
					  xtype: 'timefield',
					  fieldLabel: 'Time field',
					  minValue: '6:00 AM',
					  maxValue: '8:00 PM',
					  increment: 30,
					  anchor: '100%'
				   },{
					xtype: 'combobox',
					  fieldLabel: 'Combo Box',
					  store: Ext.create('Ext.data.Store', {
						 fields: ['abbr', 'name'],
						 data: [{
							'abbr': 'HTML',
							'name': 'HTML'
						 },{
							'abbr': 'CSS',
							'name': 'CSS'
						 },{
							'abbr': 'JS',
							'name': 'JavaScript'
						 }]
					  }),
					  valueField: 'abbr',
					  displayField: 'name'
				   },{
					  xtype: 'filefield',
					  fieldLabel: 'File field',
					  labelWidth: 50,
					  msgTarget: 'side',
					  allowBlank: false,
					  anchor: '100%',
					  buttonText: 'Select File...'
				   }]
			},{
				xtype:'label',
				html:'<p><h4>For more details please go to url : <a href="https://docs.sencha.com/extjs/6.5.3/classic/Ext.form.Panel.html" target="_blank">Click here</h4></p>'
			}
		]
	});