$(document).ready(function(){
    //getStub('/TTX_Empl_Trng_Reqst',function(results){
    $.get('getOutstanding',function(results){
    var tableString = "<thead><tr><th>Request Number</th><th>Course Name</th><th>Start Date </th><th>End Date</th><th>cost</th><th>SU </th><th>DH</th><th>VP</th></tr></thead>";
    console.log(results);
     $.each(results, function(index, rowObject){
     tableString+= "<tr><td>" +  rowObject.trng_reqst_nbr + "</td>" +
    "<td>" + rowObject.trng_cors_nm + "</td>" + "<td>" + rowObject.trng_cors_strt_dt  + "</td>" + "<td>" + rowObject.trng_cors_end_dt +
    "<td>" + rowObject.trng_cors_cost + "</td>" + "<td>" + rowObject.trng_reqst_immed_supv_apvl_flg + "</td>" + "<td>" + rowObject.trng_reqst_dept_hd_apvl_flg + "</td>" + "<td>" + rowObject.trng_reqst_vp_apvl_flg + "</td></tr>";
   });

    $('#outstandingRequestTable').html(tableString);
    
    });
});	