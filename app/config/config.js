/**
 * openHAB, the open Home Automation Bus.
 * Copyright (C) 2010-2013, openHAB.org <admin@openhab.org>
 *
 * See the contributors.txt file in the distribution for a
 * full listing of individual contributors.
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as
 * published by the Free Software Foundation; either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, see <http://www.gnu.org/licenses>.
 *
 * Additional permission under GNU GPL version 3 section 7
 *
 * If you modify this Program, or any covered work, by linking or
 * combining it with Eclipse (or a modified version of that library),
 * containing parts covered by the terms of the Eclipse Public License
 * (EPL), the licensors of this Program grant you additional permission
 * to convey the resulting work.
 */

/** OpenHAB Admin Console HABmin
 *
 * @author Chris Jackson
 */

Ext.define('openHAB.config.config', {
    extend:'Ext.panel.Panel',
    layout:'border',
    title:'Configuration',
    id:'maintabConfig',
    icon:'images/gear.png',
    tabTip:'Display <i>openHAB</i> configuration page',
    cls:'empty',

    initComponent:function () {
        var mapList = Ext.create('openHAB.config.mappingList');
        var sitemapList = Ext.create('openHAB.config.sitemapList');
        var itemList = Ext.create('openHAB.config.itemList');
        var bindingList = Ext.create('openHAB.config.bindingList');

        var accordion = Ext.create('Ext.Panel', {
            split:true,
            border:false,
            region:'west',
            width:600,
            layout:{
                type:'accordion',
                hideCollapseTool:true
            },
            items:[itemList, sitemapList, mapList, bindingList]
        });

        var propertyContainer = Ext.create('Ext.panel.Panel', {
            region:'center',
            id:'configPropertyContainer',
            header:false,
            border:false,
            layout:'fit',
            setNewProperty:function(newProperties) {
                // Remove the current editor
                this.removeAll(true);

                // Display the property sheet
                this.add(newProperties);
            }
        });

        this.items = [accordion, propertyContainer];

        this.callParent();
    }
})
;