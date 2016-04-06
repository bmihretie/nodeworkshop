'use strict'

$(document).ready(function(){
  
  $('#addTrainingForm').validate();
     
  $('#addTrainingForm').submit(function(){
     
    $.post('/addTraining', {
      trng_cors_typ: $('#trng_cors_typ').val(),
      trng_cors_nm: $('#trng_cors_nm').val(),
      trng_reqst_nbr: $('#trng_reqst_nbr').val(),
      trng_cors_strt_dt:$('#trng_cors_strt_dt').val(),
      trng_cors_end_dt: $('#trng_cors_end_dt').val(),
      trng_cors_totl_nbr_hrs:$('#trng_cors_totl_nbr_hrs').val(),
      trng_cors_locn: $('#trng_cors_locn').val(),
      trng_cors_cost:$('#trng_cors_cost').val(),
      trng_cors_rltd_exp_amt: $('#trng_cors_rltd_exp_amt').val(),
      trng_reqst_cors_bnft_txt: $('#trng_reqst_cors_bnft_txt').val(),
      trng_cors_budg_pln_flg: $('#trng_cors_budg_pln_flg').is(':checked'),
      vndr_nm: $('#vndr_nm').val(),
      vndr_mail_addr: $('#vndr_mail_addr').val(),
      vndr_mail_city: $('#vndr_mail_city').val(),
      vndr_mail_st: $('#vndr_mail_st').val(),
      vndr_mail_zip_cd: $('#vndr_mail_zip_cd').val(),
      trng_reqst_fwd_actg_paym_flg: $('#trng_reqst_fwd_actg_paym_flg').is(':checked')
      
    });
  
    return false;
  });

});
