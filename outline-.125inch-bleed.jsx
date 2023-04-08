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

    // Shrink the border by 0.125 inches on each side and center it inside the image
    var offset = 0.125 * 72; // Illustrator uses points (1 inch = 72 points)
    var newWidth = border.width - 2 * offset;
    var newHeight = border.height - 2 * offset;
    var deltaX = (border.width - newWidth) / 2;
    var deltaY = (border.height - newHeight) / 2;

    border.resize((newWidth / border.width) * 100, (newHeight / border.height) * 100);
    border.translate(deltaX, -deltaY);

    // Create a new layer called "die" and move the border under the new layer
    var dieLayer = app.activeDocument.layers.add();
    dieLayer.name = "die";
    border.move(dieLayer, ElementPlacement.PLACEATBEGINNING);
})();
