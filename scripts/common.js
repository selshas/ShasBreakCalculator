window.onload = function()
{
    var form_calculator = document.getElementById("form_en_fuse_time_calculator");
    form_calculator.addEventListener("submit", function(e)
    {
        e.preventDefault();

        var em_max = parseFloat(document.querySelector("#en_max").value);
        var en_regen_gnd = parseFloat(document.querySelector("#en_regen_gnd").value);
        var en_regen_air = parseFloat(document.querySelector("#en_regen_air").value);

        var en_fuse_ratio = parseFloat(document.querySelector("#en_fuse_ratio").value);
        var en_fuse_cool = parseFloat(document.querySelector("#en_fuse_cool").value);
        var en_fuse_regen_ratio = parseFloat(document.querySelector("#en_fuse_regen_ratio").value);

        var en_fuse_amount = em_max * en_fuse_ratio / 100.0;
        var en_fuse_regen_gnd = en_regen_gnd * en_fuse_regen_ratio / 100.0;
        var en_fuse_regen_air = en_regen_air * en_fuse_regen_ratio / 100.0;

        var en_fuse_time_gnd = en_fuse_cool + en_fuse_amount / en_fuse_regen_gnd;
        var en_fuse_time_air = en_fuse_cool + en_fuse_amount / en_fuse_regen_air;

        document.querySelector("#en_fuse_amount").innerHTML = Math.round(en_fuse_amount * 100) / 100;
        document.querySelector("#en_fuse_regen_ratio_gnd").innerHTML = Math.round(en_fuse_regen_gnd * 100) / 100;
        document.querySelector("#en_fuse_regen_ratio_air").innerHTML = Math.round(en_fuse_regen_air * 100) / 100;
        document.querySelector("#en_fuse_regen_ratio_time_gnd").innerHTML = `${Math.round(en_fuse_time_gnd * 100) / 100}sec`;
        document.querySelector("#en_fuse_regen_ratio_time_air").innerHTML =  `${Math.round(en_fuse_time_air * 100) / 100}sec`;

        return false; 
    });
}