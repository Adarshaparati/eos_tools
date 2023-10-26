export default {
	setButtonOne() {
		storeValue('activeButton', 1);
	},

	setButtonTwo() {
		storeValue('activeButton', Okr_List.triggeredItem);
	},

	setButtonThree() {
		storeValue('activeButton', 3);
	},
	setCurrentButton() {
		storeValue('currentListItemId', Obj_List.triggeredItem.id)
	},
	setCurrentButton1(){
		storeValue('currentListItemId', Okr_List.triggeredItem.key_result)
	}
}