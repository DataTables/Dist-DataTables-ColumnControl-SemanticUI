/*! ColumnControl Fomantic styling 2.0.0-beta.1 for DataTables
 * Copyright (c) SpryMedia Ltd - datatables.net/license
 */

import DataTable from 'datatables.net-se';
import ColumnControl from 'datatables.net-columncontrol';


DataTable.ColumnControl.content.dropdown.classes.container = [
	'dtcc-dropdown',
	'menu',
	'transition',
	'visible'
];

DataTable.ColumnControl.CheckList.classes.container = ['dtcc-list', 'ui', 'form'];
DataTable.ColumnControl.CheckList.classes.input = ['dtcc-list-search', 'ui', 'input'];
DataTable.ColumnControl.SearchInput.classes.container = [
	'dtcc-content',
	'dtcc-search',
	'ui',
	'form'
];
DataTable.ColumnControl.SearchInput.classes.input = ['ui', 'input'];
DataTable.ColumnControl.SearchInput.classes.select = ['ui', 'dropdown'];


export default DataTable;

