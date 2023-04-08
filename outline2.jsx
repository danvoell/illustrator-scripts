#target illustrator

(function () {
    if (app.documents.length === 0) {
        alert("No document open!");
        return;
    }

    if (app.activeDocument.selection.length === 0) {
        alert("No image selected!");
        return;
    }

    var selectedItem = app.activeDocument.selection[0];
    if (selectedItem.typename !== "PlacedItem") {
        alert("Selected item is not an image!");
        return;
    }

    var imageWidth = selectedItem.width;
    var imageHeight = selectedItem.height;
    var imageTopLeft = [selectedItem.position[0], selectedItem.position[1]];

    var strokeWidth = 2;
    var borderColor = new RGBColor();
    borderColor.red = 255;
    borderColor.green = 0;
    borderColor.blue = 255;

    var border = app.activeDocument.pathItems.rectangle(imageTopLeft[1] + strokeWidth, imageTopLeft[0] - strokeWidth, imageWidth + 2 * strokeWidth, imageHeight + 2 * strokeWidth);
    border.strokeWidth = strokeWidth;
    border.filled = false;
    border.strokeColor = borderColor;

    // Shrink the border by 5% and center it inside the image
    var shrinkFactor = 0.95;
    var newWidth = border.width * shrinkFactor;
    var newHeight = border.height * shrinkFactor;
    var deltaX = (border.width - newWidth) / 2;
    var deltaY = (border.height - newHeight) / 2;

    border.resize(shrinkFactor * 100, shrinkFactor * 100);
    border.translate(deltaX, -deltaY);
    border.zOrder(ZOrderMethod.BRINGTOFRONT);
})();
