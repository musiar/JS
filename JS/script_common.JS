window.addEventListener('load', function ()
    {
        var nums = document.getElementsByClassName('num');
            for(var i in nums)
                nums[i].innerHTML = (parseInt(i) + 1) + ')';
    })
