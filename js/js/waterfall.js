define(function(require, exports, module) {
    var i;

    /**
     * @param  {String} container [is a id name]
     * @param  {String} box [class name of children elements under father container with id name]
     * @return {undefined}
     */
     function init(container, box) {
         var oContainer = document.getElementById(container);
         var oBoxAttr = getClassObj(oContainer, box);
         var boxWidth,
         boxHeight,
         colNum,
         colHeightAttr = [],
         minHeightIndex;

         if (oBoxAttr.length <= 0) {
             return;
         }

         boxWidth = oBoxAttr[0].offsetWidth;
         colNum = Math.floor(document.documentElement.clientWidth / boxWidth);

        //set the width of container to wrap boxes's width,
        //to set the container align to center
        //if not, the container's width is 100% of viewport
        oContainer.style.width = 202*colNum + 'px';
        
        for (i=0; i < oBoxAttr.length; i++) {
            boxHeight = oBoxAttr[i].offsetHeight;
            if (i < colNum) {
                colHeightAttr[i] = boxHeight;
            } else {

                //find the column with smallest height
                minHeightIndex = getMinIndex(colHeightAttr);
                oBoxAttr[i].style.position = 'absolute';
                oBoxAttr[i].style.top = colHeightAttr[minHeightIndex] + 'px';
                oBoxAttr[i].style.left = oBoxAttr[minHeightIndex].offsetLeft + 'px';
                colHeightAttr[minHeightIndex] += oBoxAttr[i].offsetHeight;
            }
        }
    }

    /**
     * @param  {Array} arrayObj
     * @return {Number} i 
     */
     function getMinIndex(arrayObj) {
         var index;
        //get the min num of a array
        var min = Math.min.apply(null, arrayObj);
        for(index in arrayObj) {
            if (min === arrayObj[index]) {
                return index;
            }
        }
    }

    /**
     * @param  {Obj} parent
     * @param  {String} className 
     * @return {Array} classObj [elements array that has the class with className]
     */
     function getClassObj(parent, className) {

        //get all children elements of father element
        var objs = parent.getElementsByTagName('*');
        var classObj = new Array();

        //get all elements those have the right class
        for (i=0; i < objs.length; i++) {
            if (className === objs[i].className) {
                classObj.push(objs[i]);
            }
        }
        return classObj;
    }

    exports.init = init;
    // module.exports = init;
});