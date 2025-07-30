
class InventoryElements {

    prodList = () => { return '.inventory_list'}

    btnAddOrRemoveCart = (btnName) => { return `#${btnName}-sauce-labs-bike-light`}

    item = () => { return 'div[data-test=inventory-item]'}

    listOfItem  = () => { return 'div[data-test=inventory-list]'}
    itemTitle = () => { return 'div[data-test=inventory-item-name]'}
    itemPrice = () => { return 'div[data-test=inventory-item-price'} 
    itemDescr = () => { return 'div[data-test=inventory-item-desc]'}  
    itemImg   = () => { return '.inventory_item_img img'}

} export default InventoryElements