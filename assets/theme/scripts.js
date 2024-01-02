function performSearch() {
    var searchInput = document.getElementById('search-input').value;
    var currentUrl = window.location.href;
    var path = new URL(currentUrl).pathname;
    var pageName = path.split('/').pop();

    if (pageName === "view-order.html" || pageName === "view-order-details.html") {
        window.location.href = `/views/view-order-details.html?orderid=${searchInput}`;
    } else if (pageName === "view-ticket.html" || pageName === "view-ticket-details.html") {
        window.location.href = `/views/view-ticket-details.html?ticketid=${searchInput}`;
    } else {
        console.log("searchInput", searchInput)
        window.location.href = `/views/search-details.html?search=${searchInput}`;
    }
}


//Get ui configurations and save it in session.
var baseUrl = "https://apps.designcan.in/devs/sa/middleware/kapture-support/";
var view_base_url = "http://127.0.0.1:3000/"
var xhr = new XMLHttpRequest();
var url = new URL(window.location.href);
var customercode = url.searchParams.get("customer_code") || '';
var supportKey = url.searchParams.get("data-supportkey") || 'ae9059fb2e80407478218d0b2d4a0d6467e4b18b1152920776';
var userType = "Registered";
var iv = url.searchParams.get("iv") || '';
var logout_message = "Logout from session, Re-initiate API."
var email = url.searchParams.get("data-email") || '';
var chatUrl = ''; var key = '';
sessionStorage.setItem("ui-config", JSON.stringify({
    "kapchat_general_settings": {
        "industry_type": "field services",
        "portal_type": "both",
        "font_family": "open-sans",
        "template_type": "template1",
        "client_name": "",
        "fav_icon_url": "https://www.kapture.cx/images/favi.png",
        "logo_url": "/assets/images/kapture_logo.png",
        "brand_url": "https://back-to-website",
        "theme_color": "#001E38",
        "primary_color": "#39c6bc",
        "secondry_color": "#FFF1DA",
        "is_header": true,
        "is_footer": true,
        "is_banner": true
    },
    "kapchat_header_details": {
        "header_bg_color": "#ffffff",
        "header_text_color": "#222",
        "is_header_menu": true
    },
    "kapchat_header_menu_detail": {
        "faq_detail": {
            "is_faq": true,
            "faq_text": "My FAQs",
            "faq_title": "Hii there",
            "faq_description": "how may i help you",
            "faq_source_link": "km-democrm.kapturecrm.com",
            "faq_category_icon_url": "https://democrm.kapturecrm.com/selfserve/assets/img/cx/ic-category.png"
        },
        "view_ticket_details": {
            "is_view_ticket": true,
            "view_ticket_text": "View Ticket"
        },
        "order_detail": {
            "is_order": false,
            "order_text": "Bookings"
        },
        "add_ticket_detail": {
            "is_create_ticket": true,
            "add_ticket_text": "Add Ticket",
            "add_ticket_form_title": "Add Ticket",
            "add_ticket_form_subtitle": "can we help you",
            "create_form_detail": [
                {
                    "field_name": "Subject",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Subject",
                    "type": "text",
                    "id": "createTicketLabel1"
                },
                {
                    "field_name": "Name",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Name",
                    "type": "text",
                    "id": "createTicketLabel2"
                },
                {
                    "field_name": "Email",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Email",
                    "type": "email",
                    "id": "createTicketLabel3"
                },
                {
                    "field_name": "Contact",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Phone",
                    "type": "tel",
                    "id": "createTicketLabel4"
                },
                {
                    "field_name": "Agents_Empacted",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Agents Empacted",
                    "type": "textarea",
                    "id": "createTicketLabel5"
                },
                {
                    "field_name": "Select_the_issue",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Select the issue",
                    "type": "select",
                    "options": ["Log In Issues", "Slow Loading Times", "Mobile Responsiveness", "Broken Links", "Outdated Content"],
                    "id": "createTicketLabel5"
                },
                {
                    "field_name": "Select_the_sub_issue",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Select the sub issue",
                    "type": "select",
                    "options": ["Log In Issues", "Slow Loading Times", "Mobile Responsiveness", "Broken Links", "Outdated Content"],
                    "id": "createTicketLabel5"
                },
                {
                    "field_name": "upload_file",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Select the files to upload",
                    "type": "file",
                    "id": "createTicketLabel5"
                },
                {
                    "field_name": "message",
                    "label": true,
                    "required": true,
                    "mandatory": true,
                    "placeholder": "Message",
                    "type": "textarea",
                    "id": "createTicketLabel5"
                }
            ]
        }
    },
    "kapchat_footer_detail": {
        "footer_bg_color": "#ffffff",
        "footer_text_color": "#222222",
        "footer_type": "footer-01",
        "footer_contents": {
            "email_detail": {
                "is_email": true,
                "email_id": "demo@gmail.com",
                "title": "Let's Connect"
            },
            "call_detail": {
                "is_call": true,
                "phone_number": "9938793398",
                "title": "Your solution awaits!"
            },
            "footer_description": {
                "is_description": true,
                "description_text": "Experience seamless travel with our convenient booking, smooth connections, and attentive staff."
            },
            "chat_with_us_detail": {
                "is_chat_with_us": false,
                "chat_type": ""
            },
            "copyright": "Ⓒ Copyright 2023 Alitalia. All rights reserved."
        },
        "footer_html_code": "<div style='background-color:#000;color:#fff;width:100%;position:fixed;bottom:0;display:flex;align-items:center;justify-content:center;padding:10px;'><p>Footer</p></div>"
    },
    "kapchat_banner_detail": {
        "banner_type": "banner-1",
        "banner_title": "Hello, How can we help ",
        "banner_description": "",
        "banner_bg_color": "#a4c639",
        "banner_bg_img": "",
        "banner_side_img": "https://democrm.kapturecrm.com/selfserve/assets/img/cx/banner-image3.png",
        "is_search": true,
        "search_placement": ""
    },
    "call_to_action_content_detail": {
        "cta_title": "How can we help you",
        "cta_description": "",
        "cta_btn_text": "Submit"
    },
    "feedback_details": {
        "feedback_input_rating_type": "yes/no rating",
        "feedback_positive_message": "Thank you",
        "feedback_negative_message": "Not good",
        "feedback_survey": {
            "chat": true,
            "email": true,
            "call": true
        },
        "feedback_form_details": {
            "feedback_form": true,
            "positive_feedback_add_val": "4,5,6",
            "positive_enable_remark": true,
            "negative_feedback_add_val": "1,2,3",
            "negative_enable_remark": true
        }
    },
    "kapchat_faq_categories": [
        {
            "id": 5800,
            "name": "Login & Access",
            "image": "/assets/images/Support_icon.png",
            "count": "12"
        },
        {
            "id": 5802,
            "name": "Dashboards & Reports",
            "image": "/assets/images/material-symbols_help.png",
            "count": "12"
        },
        {
            "id": 5800,
            "name": "Tickets",
            "image": "/assets/images/Support_icon.png",
            "count": "12"
        },
        {
            "id": 5800,
            "name": "Configurations",
            "image": "/assets/images/Support_icon.png",
            "count": "12"
        }
    ]
}))
if (customercode == "" && sessionStorage.getItem("cx_code") != null && sessionStorage.getItem("cx_code") != "") {
    customercode = sessionStorage.getItem("cx_code");
}
if (iv == "" && sessionStorage.getItem("cx_iv") != null && sessionStorage.getItem("cx_iv") != "") {
    iv = sessionStorage.getItem("cx_iv");
}
if (key == "" && sessionStorage.getItem("cx_key") != null && sessionStorage.getItem("cx_key") != "") {
    key = sessionStorage.getItem("cx_key");
}



// if (!sessionStorage.getItem("ui-config")) {
//     $.ajax({
//         url: baseUrl + 'config/get-ui.php', type: 'POST', dataType: "json",
//         headers: { "Support-Key": supportKey },
//         success: function (result) {
//             if (result.message === logout_message) {
//                 tokenExpire();
//             }
//             console.log(result)
//             // let jsondata = JSON.parse(result[0].web_json);
//             sessionStorage.setItem("ui-config", JSON.stringify(result.data));
//             sessionStorage.setItem("api-token", result.token)
//             sessionStorage.setItem("cx_code", customercode);
//             sessionStorage.setItem("cx_iv", iv);
//             sessionStorage.setItem("userType", "Registered");
//             // decryptUserFunction();
//         },
//     });
// }

function tokenExpire() {
    sessionStorage.removeItem("api-token");
    sessionStorage.removeItem("payload");
    sessionStorage.removeItem("ui-config");
    location.reload();
}

//Decrypt and get user Type [register or nonregister]
// xhr.open('GET', baseUrl + '/controller/apiDetailsController.php?support_key=' + supportKey, false);
// xhr.onreadystatechange = function () {
//     if (this.readyState === XMLHttpRequest.DONE) {
//         decryptFunction();//setApiDetailsController getDecryptController
//     }
// }
// xhr.send();
// function decryptFunction() {
//     xhr.open("POST", baseUrl + '/controller/getDecryptController.php?support_key=' + supportKey, false);
//     xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
//     xhr.onreadystatechange = function () {
//         let response = JSON.parse(this.response);
//         userType = response.user_type;
//         if (userType == "Registered") {
//             if (sessionStorage.getItem("cx_key") == null) {
//                 sessionStorage.setItem("cx_key", response.data);
//                 location.reload();
//             }
//             chatUrl = "https://selfserveapp.kapturecrm.com/web-view/webview_chat.html?data-supportkey=" + supportKey + "&script_type=RNF&chat-for=TICKET&customer_code=" + customercode + "&iv=" + iv + "&origin=cx-selfserve"
//         } else if (userType == "Guest") {
//             chatUrl = "https://selfserveapp.kapturecrm.com/web-view/webview_chat.html?data-supportkey=" + supportKey + "&script_type=NR&chat-for=TICKET&origin=cx-selfserve"
//         }
//     }
//     xhr.send("payload=" + encodeURIComponent(customercode) + "&iv=" + iv + "&client_name=" + supportKey);
// }

// function to decrypt the user details payload

function decryptUserFunction() {
    console.log("decryptUserFunction")
    $.ajax({
        url: baseUrl + 'auth/decrypt-user',
        type: 'POST', dataType: "json",
        headers: {
            token: sessionStorage.getItem("api-token"),
            payload: "cf42d861eb5134bf937f4f45973e9883b386868c4730435628 || e8dmyIVukwKbTrnq/c75Zw== || 54c155b79f4df782" // supportKey + " || " + customercode + " || " + iv
        },
        success: function (result) {
            sessionStorage.setItem("payload", result.data);
            sessionStorage.setItem("userType", result.user_type);
            location.reload();
        }
    });
}




//index.php page's js code here.
function faqPageAction() {
    let faqMainCategoryDiv = '';
    let result = JSON.parse(sessionStorage.getItem("ui-config"));
    for (i = 0; i < result.kapchat_faq_categories.length; i++) {
        faqMainCategoryDiv = faqMainCategoryDiv + '<a class="faq-box" href="' + 'views/sub-category.html?catName=' + encodeURIComponent(result.kapchat_faq_categories[i].name) + '&catId=' + result.kapchat_faq_categories[i].id + '">'
            + '<img src="' + result.kapchat_faq_categories[i].image + '" />'
            + '<div>'
            + '<h4>' + result.kapchat_faq_categories[i].name + '</h4>'
            + '<p>20 Articles</p>'
            + '</div>'
            + '</a>';
    }
    $("#kapchat_web_faq").html(faqMainCategoryDiv);
    removeLoader();
}


//sub-category.php page's js code here.
function subCatPageAction(catName) {
    $.ajax({
        url: baseUrl + 'faq/faq-category.php', type: 'POST', dataType: "json",
        headers: {
            // token: sessionStorage.getItem("api-token"),
            // payload: sessionStorage.getItem("payload")
        },
        success: function (result) {
            if (result.message === logout_message) {
                tokenExpire();
            }

            if (result.status == "success") {
                result = result.message;
                let faqMainCategoryDiv = '<ul class="faq-lists cus-scroll">';
                let faqSubCategoryDiv = '<div class="faq-display"><ul>';
                let faqSubCatIds = [];
                for (i = 0; i < result.category.length; i++) {
                    if (result.category[i].parentCategoryName == "Add as Parent Category") {
                        let isActive = catName == result.category[i].name ? 'active' : '';
                        faqMainCategoryDiv = faqMainCategoryDiv + '<li class="' + isActive + '"><a href="' + '/views/sub-category.html?catName=' + encodeURIComponent(result.category[i].name) + '&catId=' + result.category[i].id + '">'
                            + result.category[i].name
                            + '</a></li>';
                    }
                    if (result.category[i].parentCategoryName == catName) {
                        faqSubCategoryDiv = faqSubCategoryDiv + '<li><p class="subcat-lists">'
                            + result.category[i].name
                            + '<span>+</span></p><ul class="faq-content-child cus-scroll"><li><a href="#">No data found...</a></li></ul></li>';
                        faqSubCatIds.push(result.category[i].id);
                    }
                }
                faqMainCategoryDiv = faqMainCategoryDiv + '</ul>';
                faqSubCategoryDiv = faqSubCategoryDiv + '</ul></div>';
                let finalHtml = faqMainCategoryDiv + faqSubCategoryDiv;
                $("#kapchat_web_faq").html(finalHtml);
                $("#kapchat_web_faq ul>li:nth-child(1)").find('.subcat-lists').addClass('active');
                $("#kapchat_web_faq ul>li .subcat-lists.active").find('span').html('-');
                catConPageAction(faqSubCatIds, catName);
                // removeLoader();
            }
        }
    });
}

//For get all the subcategories content.
function catConPageAction(faqSubCatIds, catName) {
    for (i = 0; i < faqSubCatIds.length; i++) {
        $.ajax({
            url: baseUrl + 'faq/faq-content.php',
            headers: {
                // token: sessionStorage.getItem("api-token"),
                // payload: sessionStorage.getItem("payload")
            },
            dataType: "json",
            contentType: "application/json; charset=utf-8",
            type: "POST",
            data: JSON.stringify([
                {
                    "category_id": faqSubCatIds[i]
                }
            ]),
            success: function (result) {
                if (result.message === logout_message) {
                    tokenExpire();
                }
                ;
                let catTitle = result.message.contents[0].categoryName;
                let curEle = $('#kapchat_web_faq .faq-display .subcat-lists:contains(' + catTitle + ')');
                let faqSubCategoryContentDiv = '';
                for (i = 0; i < result.message.contents.length; i++) {
                    console.log(result.message.contents[i].title)
                    faqSubCategoryContentDiv = faqSubCategoryContentDiv + '<li>'
                        + '<a href="' + '/views/subcategory-content-details.html?catName=' + (catName) + '&subCat=' + result.message.contents[i].categoryName + '&catId=' + result.message.contents[i].categoryId + '&childId=' + result.message.contents[i].id + '">'
                        + '&raquo; ' + result.message.contents[i].title
                        + '</a></li>';
                }
                curEle.next('.faq-content-child').html(faqSubCategoryContentDiv);
            }
        });
    }
}

//subcategory-content-details.php page's js code here.
function catViewPageAction(catName, catId, childId) {
    console.log(catName, catId, childId)
    let result = JSON.parse(sessionStorage.getItem("ui-config"));
    let faqMainCategoryDiv = '<ul class="faq-lists">';
    for (i = 0; i < result.kapchat_faq_categories.length; i++) {
        let isActive = catName == result.kapchat_faq_categories[i].name ? 'active' : '';
        faqMainCategoryDiv = faqMainCategoryDiv + '<li class="' + isActive + '"><a href="' + '/views/sub-category.html?catName=' + encodeURIComponent(result.kapchat_faq_categories[i].name) + '&catId=' + result.kapchat_faq_categories[i].id + '">'
            + result.kapchat_faq_categories[i].name
            + '</a></li>';
    }
    faqMainCategoryDiv = faqMainCategoryDiv + '</ul>';
    $("#kapchat_web_faq").html(faqMainCategoryDiv);
    //Loading content data here.
    let faqContentDetailsDiv = '<div class="faq-display"><ul>';
    $.ajax({
        url: baseUrl + 'faq/faq-content.php', type: 'POST',
        contentType: "application/json; charset=utf-8",
        headers: {
            // token: sessionStorage.getItem("api-token"),
            // payload: sessionStorage.getItem("payload")
        },
        data: JSON.stringify([{ "category_id": catId }]),
        dataType: "json",
        success: function (result) {
            if (result.message === logout_message) {
                tokenExpire();
            }
            ;
            if (result.status == "success") {
                let helpFulDiv = '';
                if (userType == "Registered") {
                    helpFulDiv = helpFulDiv + '<div class="was-helpful">'
                        + '<h4>Was this helpful?</h4>'
                        + '<div>'
                        + '<svg class="like-btn" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 8h-5.612l1.123-3.367c.202-.608.1-1.282-.275-1.802S14.253 2 13.612 2H12c-.297 0-.578.132-.769.36L6.531 8H4c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h13.307a2.01 2.01 0 0 0 1.873-1.298l2.757-7.351A1 1 0 0 0 22 12v-2c0-1.103-.897-2-2-2zM4 10h2v9H4v-9zm16 1.819L17.307 19H8V9.362L12.468 4h1.146l-1.562 4.683A.998.998 0 0 0 13 10h7v1.819z"></path></svg>'
                        + '<svg class="dislike-btn" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 3H6.693A2.01 2.01 0 0 0 4.82 4.298l-2.757 7.351A1 1 0 0 0 2 12v2c0 1.103.897 2 2 2h5.612L8.49 19.367a2.004 2.004 0 0 0 .274 1.802c.376.52.982.831 1.624.831H12c.297 0 .578-.132.769-.36l4.7-5.64H20c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm-8.469 17h-1.145l1.562-4.684A1 1 0 0 0 11 14H4v-1.819L6.693 5H16v9.638L11.531 20zM18 14V5h2l.001 9H18z"></path></svg>'
                        + '</div>'
                        + '</div>';
                }
                for (i = 0; i < result.message.contents.length; i++) {
                    if (result.message.contents[i].id == parseInt(childId)) {
                        faqContentDetailsDiv = faqContentDetailsDiv + '<li><p class="subcat-lists active">'
                            + result.message.contents[i].title
                            + '</p>'
                            + '<ul class="faq-content-child"><li><div>'
                            + result.message.contents[i].detail
                            + '</div></li>' + helpFulDiv + '</ul>'
                            + '</li>';
                    }
                }
                faqContentDetailsDiv = faqContentDetailsDiv + '</ul></div>';
                $("#kapchat_web_faq").append(faqContentDetailsDiv);
                $("#kapchat_web_faq .faq-display div, #kapchat_web_faq .faq-display p, #kapchat_web_faq .faq-display span").removeAttr("style");
            }
        }
    });
    removeLoader();
}

//search-details.php page's js code here.
function searchDetailsPageAction(keyword, dofor) {
    if (keyword.toLowerCase() == 'faq') {
        $("#header .header-links>li:nth-child(1)>a").addClass('active')
    }
    let faqContentDetailsDiv = '<div class="faq-display"><ul>';
    $.ajax({
        url: baseUrl + 'faq/faq-search.php',
        headers: {
            // token: sessionStorage.getItem("api-token"),
            // payload: sessionStorage.getItem("payload")
        },
        type: 'POST', data: { search_key: keyword, dofor: dofor },
        dataType: "json",
        success: function (result) {
            if (result.message === logout_message) {
                tokenExpire();
            }
            ;
            if (result.status == "success") {
                if (result.message.contents) {
                    for (i = 0; i < result.message.contents.length && i < 5; i++) {
                        faqContentDetailsDiv = faqContentDetailsDiv + '<li><p class="d-flex s-between subcat-lists fw-2">'
                            + result.message.contents[i].title
                            + '<span>+</span></p><ul class="faq-content-child cus-scroll"><li><div>'
                            + result.message.contents[i].detail
                            + '</div></li></ul></li>';
                    }
                } else {
                    faqContentDetailsDiv = faqContentDetailsDiv + '<li>'
                        + '<li><p class="d-flex s-between subcat-lists fw-2 active">No data found...</p></li>'
                        + '</li>'
                }
                faqContentDetailsDiv = faqContentDetailsDiv + '</ul></div>';
                $("#kapchat_web_faq").html(faqContentDetailsDiv);
                $("#kapchat_web_faq .faq-display div, #kapchat_web_faq .faq-display p, #kapchat_web_faq .faq-display span").removeAttr("style");
            }
        }
    });
    removeLoader();
}

//add-ticket.php page's js code here.
/**
 * Adds ticket action based on the UI configuration.
 */

const fileTypeIcons = {
    "application/pdf": "/assets/images/file_types/pdf.jpg",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "/assets/images/file_types/excel.png", // .xlsx
    "text/csv": "img/csv.png",
    "application/msword": "/assets/images/file_types/word.png", // .doc
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "/assets/images/file_types/word.png", // .docx
    "default": "/assets/images/file_types/pdf.jpg" // generic icon for unspecified types
};

let selectedFiles = [];
function addTicketAction() {
    let uiConfig = JSON.parse(sessionStorage.getItem("ui-config"));
    let formInputs = '<form id="addTicket">'; let input = "";
    if (uiConfig.kapchat_header_menu_detail.add_ticket_detail.is_create_ticket) {
        for (i = 0; i < uiConfig.kapchat_header_menu_detail.add_ticket_detail.create_form_detail.length; i++) {
            let curData = uiConfig.kapchat_header_menu_detail.add_ticket_detail.create_form_detail[i];
            if (!curData.name)
                var mapKeys = {
                    "Name": "Name",
                    "Email": "Email",
                    "Phone": "Phone",
                    "Subject": "Subject",
                    "City": "City"
                }
            console.log(mapKeys.curData?.field_name)
            if (curData.type == "textarea") {
                input = '<textarea class="form-input" name="' + mapKeys[curData.field_name] + '" placeholder="' + curData.placeholder + '" required="' + curData.required + '"></textarea>';
            }
            else if (curData.type == "file") {
                input = '<div id="upload_files_container" >' +
                    '<div><img src="/assets/images/upload.png" id="uploadIcon" onclick="triggerFileInput()"></div>' +
                    '<div style="text-align:center" id="dragAndDropArea" ondrop="handleDrop(event)" ondragover="allowDrop(event)">' +
                    '   <strong>Drop file here</strong>' +
                    '<p style="opacity:0.7" >Only JPG, PNG, DOC & PDF files are supported.</p>' +
                    '   <input type="file" id="fileInput" name="file[]" multiple onchange="addFiles(this)" style="display: none;">' +
                    '</div>' +
                    '<div id="previewArea"></div>' +
                    '<div class="or_div" ><div/><b>OR</b><div/></div>' +
                    '<div id="image_by_url">' +
                    '<input type="text" id="image_url" placeholder="Enter image url" />' +
                    '<button onClick="addFileByURL()()" type="button" onclick="addImageByUrl()">Add</button>' +
                    '</div>' +
                    '</div>';
                '</div>'
            }
            else if (curData.type == "select") {
                input = '<select style="width:49%;" class="form-input" name="' + mapKeys[curData.field_name] + '" placeholder="' + curData.placeholder + '" required="' + curData.required + '">'
                    + '<option value="">Select</option>'
                for (j = 0; j < curData.options.length; j++) {
                    input = input + '<option value="' + curData.options[j] + '">' + curData.options[j] + '</option>';
                }
                input = input + '</select>';
            }
            else {
                input = '<input class="form-input" type="' + curData.type + '" name="' + mapKeys[curData.field_name] + '" placeholder="' + curData.placeholder + '" required="' + curData.required + '"/>';
            }
            formInputs = formInputs + input;
        }
    } else {
        formInputs = '<p>Sorry, You are not able to create ticket this time.</p>';
    }
    formInputs = formInputs + '<button style="margin:auto" type="submit">Submit</button>' + '</form>';
    $("#kapchat_web_faq.addticket").html(formInputs);
    //On form submit, add ticket
    $("#addTicket").on("submit", function (e) {
        e.preventDefault();
        $(this).find('button').prop("disabled", true);
        var formDataArray = $(this).serializeArray()
        $.ajax({
            url: baseUrl + 'ticket/create-ticket.php',
            headers: {
                // token: sessionStorage.getItem("api-token"),
                // payload: sessionStorage.getItem("payload")
            },
            type: 'POST', data: formDataArray, dataType: "json",
            success: function (result) {
                if (result.message === logout_message) {
                    tokenExpire();
                }
                ;
                if (result.status == "success") {
                    let successMsg = '<div class="success-message">'
                        + '<p class="icon"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg></p>'
                        + '<h4 class="title">Ticket Generated Successfully</h4>'
                        + '<p>Ticket Id: ' + result.ticket_id + '</p>'
                        + '</div>';
                    $("#kapchat_web_faq.addticket").html(successMsg);
                } else {
                    let errorMsg = '<p class="error-message">Unable to add your ticket, Try again.</p>';
                    $("#kapchat_web_faq.addticket .error-message").remove();
                    $("#kapchat_web_faq.addticket").append(errorMsg);
                    $("#addTicket").find('button').prop("disabled", false);
                }
            }
        });
    });
    removeLoader();
}

//view-ticket.php page's js code here.
function viewTicketsPageAction() {
    if (userType == "Registered") {
        $.ajax({
            url: baseUrl + '/ticket/view-ticket.php',
            headers: {
                // token: sessionStorage.getItem("api-token"),
                // payload: sessionStorage.getItem("payload")
            },
            data: ({
                "start_date": "2023-12-07",
                "end_date": "2023-12-10"
            }),
            type: 'POST', dataType: "json",
            success: function (result) {
                if (result.message === "Re-initiate decrypt user API.") {
                    tokenExpire();
                }

                if (result.message.length > 0) {
                    let ticketData = '';
                    for (i = 0; i < result.message.length; i++) {
                        let sourceIcon = '';
                        let priorityColor = ''
                        switch (result.message[i].priority) {
                            case 'high':
                                priorityColor = '#219419';
                                break;
                            case 'medium':
                                priorityColor = '#c4a312';
                                break;
                            default:
                                priorityColor = '#c41212';
                                break;
                        }
                        switch (result.message[i].primarySource) {
                            case 'Email Task':
                                sourceIcon = '<svg class="source-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></svg>';
                                break;
                            case 'Call Task':
                                continue;
                                sourceIcon = '<svg class="source-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 10.999h2C22 5.869 18.127 2 12.99 2v2C17.052 4 20 6.943 20 10.999z"></path><path d="M13 8c2.103 0 3 .897 3 3h2c0-3.225-1.775-5-5-5v2zm3.422 5.443a1.001 1.001 0 0 0-1.391.043l-2.393 2.461c-.576-.11-1.734-.471-2.926-1.66-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394a1 1 0 0 0 .043-1.391L6.859 3.513a1 1 0 0 0-1.391-.087l-2.17 1.861a1 1 0 0 0-.29.649c-.015.25-.301 6.172 4.291 10.766C11.305 20.707 16.323 21 17.705 21c.202 0 .326-.006.359-.008a.992.992 0 0 0 .648-.291l1.86-2.171a1 1 0 0 0-.086-1.391l-4.064-3.696z"></path></svg>';
                                break;
                            default:
                                sourceIcon = '<svg class="source-icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"></path></svg>';
                                break;
                        }
                        ticketData = ticketData + '<a class="ticket-box ' + result.message[i].status + '" href="' + '/views/view-ticket-details.html?ticketid=' + result.message[i].ticketId + '">'
                            + '<p class="ticket-source">' + sourceIcon + ' ' + result.message[i].primarySource + '</p>'
                            + '<div class="ticket-details"><p><b>Status:</b> <span class="text-grey">' + result.message[i].status + '</span></p><p><b>Date:</b> <span class="text-grey">' + result.message[i].date + '</span></p></div>'
                            + '<div class="ticket-details"><p><b>Ticket ID:</b> <span class="text-grey">' + result.message[i].ticketId + '</span></p><p><b>Priority:</b> <span style="color:' + priorityColor + '">' + result.message[i].priority + '</span></p></div>'
                            + '</a>';
                    }
                    $("#kapchat_web_faq").html(ticketData);
                } else {
                    let errorMsg = '<p class="box error-message">Sorry, We are unable to find any data.</p>';
                    $("#kapchat_web_faq").html(errorMsg);
                }
            }
        });
    } else {
        let errorMsg = '<p class="box error-message">Sorry, You don\'t have permission to view this page.</p>';
        $("#kapchat_web_faq").html(errorMsg);
    }
    removeLoader();
}

//view-ticket-details.php page's js code here.
function viewTicketPageAction(ticketid) {
    $.ajax({
        url: baseUrl + 'ticket/view-ticket-details.php',
        headers: {
            // token: sessionStorage.getItem("api-token"),
            // payload: sessionStorage.getItem("payload")
        },
        type: 'POST', data: { "ticket_ids": ticketid }, dataType: "json",
        success: function (result) {
            if (result.message === logout_message) {
                tokenExpire();
            }
            ;
            if (result.status == null) {
                let ticketData = '<div class="ticket-info">'
                    + '<div class="text"><p class="title"><b>Created</b></p><p class="text-grey">' + result[0].task_details.date + '</p></div>'
                    + '<div class="text"><p class="title"><b>Ticket ID</b></p><p class="text-grey">' + result[0].task_details.ticketId + '</p></div>'
                    + '<div class="text"><p class="title"><b>Status</b></p><p class="text-grey">' + result[0].task_details.status + '</p></div>'
                    + '<div class="text"><p class="title"><b>Order ID</b></p><p class="text-grey">' + `${result[0].task_details.orderId || 'Not AVailable'}` + '</p></div>'
                    + '</div>';
                let chatData = [];
                if (result[0].task_details.primarySource.includes("Call"))
                    chatData = result[0].conversation_type.call
                if (result[0].task_details.primarySource.includes("Chat"))
                    chatData = result[0].conversation_type.chat
                if (result[0].task_details.primarySource.includes("Email"))
                    chatData = result[0].conversation_type.email
                let ticketChatData = '<div class="ticket-chats"><div class="chats-container cus-scroll">';
                if (result[0].task_details.primarySource.includes("Email Task")) {
                    for (i = 0; i < chatData.length; i++) {
                        ticketChatData = ticketChatData + '<div class="email_list" ><button onClick="handleAccordion(this)" class="accordion">' +
                            '<div class="acc_lft_section" ><div class="email_avatar"><img src="/assets/images/support_avatar.png" alt="" /></div>' +
                            '<div class="bt_name_section" > <strong>' + chatData[i].sender_email + '</strong>' +
                            '<div class="to_email">To: ' + chatData[i].receiver + '</div>' +
                            '</div>' +
                            '<div class="bt_md_section" >' +
                            '<strong class="bt_email_title" >' + chatData[i].subject + '</strong>' +
                            // '<div class="bt_email_detail" >' + chatData[i].email_body + '</div>' +
                            '</div></div>' +
                            '<div class="bt_email_date">' + chatData[i].date + '</div>' +
                            '</button>' +
                            '<div class="panel">' +
                            '<div>' +
                            '<div class="email_body"> ' +
                            '<strong class="email_body_header" >' + chatData[i].subject + '</strong>' +
                            '<div class="email_body_content" >' + chatData[i].email_body + '</div>' +
                            '<div class="email_body_hr" ></div>' +
                            '<div><strong class="email_attachments" >' + (chatData[i].attachments?.length || 0) + " " + 'Attachments</strong></div>' +
                            '</div > ' +
                            '</div > ' +
                            '</div>';
                    }
                }
                else if (chatData.length == 0) {
                    ticketChatData = ticketChatData + `<div class="">`
                        + '<div><p>No chat data is available.</p></div>'
                        + '</div>';
                }
                else {
                    for (i = 0; i < chatData.length; i++) {
                        ticketChatData = ticketChatData + `<div class="chat-data left">`
                            + '<div class="icon">' +
                            `${chatData[i].sender_name == "Support Chat" ? '<img src="/assets/images/support_avatar.png" alt="" />' : '<img src="/assets/images/user_avatar.png" alt="" />'}` +
                            '</div > '
                            + '<div class="chat"><p class="chat-dates">' + chatData[i].sentDate + '</p><p>' + chatData[i].chat_message + '</p></div>'
                            + '</div>';
                    }
                }
                ticketChatData = ticketChatData + '</div></div>';
                $("#kapchat_web_faq").html(ticketData + ticketChatData);
            } else {
                let errorMsg = '<p class="box error-message">Sorry, You don\'t have permission to view this page.</p>';
                $("#kapchat_web_faq").html(errorMsg);
            }
        }
    });
    removeLoader();
}

//view-order.php page's js code here.
function viewOrdersPageAction() {
    if (userType == "Registered") {
        $.ajax({
            url: baseUrl + 'orders/list',
            headers: {
                // token: sessionStorage.getItem("api-token"),
                // payload: sessionStorage.getItem("payload")
            },
            type: 'POST',
            dataType: "json",
            success: function (result) {
                if (result.message === logout_message) {
                    tokenExpire();
                }
                ;
                if (result.order_details.length > 0) {
                    let orderData = '';
                    for (i = 0; i < result.order_details.length; i++) {
                        let orderProduct = '<ul>';
                        for (j = 0; j < result.order_details[i].product.length; j++) {
                            orderProduct = orderProduct + '<li>' + result.order_details[i].product[j].prod_quantity + ' x ' + result.order_details[i].product[j].product_name + '</li>'
                        }
                        orderProduct = orderProduct + '</ul>';
                        orderData = orderData + '<a href="' + '/views/view-order-details.html?orderid=' + result.order_details[i].order.order_id + '" class="order-box">'
                            + '<div class="order-header">'
                            + '<div>'
                            + '<svg class="icon" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"></path></svg>'
                            + '<div><p class="header-title">Order ID: ' + result.order_details[i].order.order_id + '</p><p class="text-grey">' + result.order_details[i].customer.name + ', ' + result.order_details[i].customer.locality + ', ' + result.order_details[i].customer.pincode + '</p></div>'
                            + '</div>'
                            + '<div><p class="status">' + result.order_details[i].order.status + '</p></div>'
                            + '</div>'
                            + '<div class="order-content cus-scroll">' + orderProduct + '</div>'
                            + '<div class="order-footer">'
                            + '<p class="footer-date">' + result.order_details[i].order.create_date + '</p>'
                            + '<p class="footer-price">₹ ' + result.order_details[i].order.total_product_value + '</p>'
                            + '</div>'
                            + '</a>';
                    }
                    $("#kapchat_web_faq").html(orderData);
                } else {
                    let errorMsg = '<p class="box error-message">Sorry, We are unable to find any data.</p>';
                    $("#kapchat_web_faq").html(errorMsg);
                }
            }
        });
    } else {
        let errorMsg = '<p class="box error-message">Sorry, You don\'t have permission to view this page.</p>';
        $("#kapchat_web_faq").html(errorMsg);
    }
    removeLoader();
}

//view-order-details.php page's js code here.
function viewOrderPageAction(orderid) {
    if (userType == "Registered") {
        $.ajax({
            url: baseUrl + 'orders/view',
            headers: {
                // token: sessionStorage.getItem("api-token"),
                // payload: sessionStorage.getItem("payload")
            },
            type: 'POST', data: JSON.stringify({ "order-id": orderid }), dataType: "json",
            success: function (result) {
                if (result.message === logout_message) {
                    tokenExpire();
                }
                ;
                if (result.order_details.length > 0) {
                    let orderProduct = '<ul class="products-list cus-scroll">';
                    for (j = 0; j < result.order_details[0].product.length; j++) {
                        orderProduct = orderProduct + '<li>'
                            + '<span> <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z" fill="currentColor" stroke-width="0"></path></svg>'
                            + result.order_details[0].product[j].product_name + ' x ' + result.order_details[0].product[j].prod_quantity + '</span>'
                            + '<span>₹ ' + result.order_details[0].product[j].rate + '</span>'
                            + '</li>'
                    }
                    orderProduct = orderProduct + '</ul>';
                    let search_query = "booking"
                    if (result.order_details[0].order.status == "Delivered") {
                        search_query = 'OrderDelivered';
                    } else if (result.order_details[0].order.status == "To Deliver") {
                        search_query = 'OrderToDeliever';
                    } else if (result.order_details[0].order.status == "To Approve") {
                        search_query = 'OrderPlaced';
                    }
                    let orderData = '<div class="order-details">'
                        + '<div class="order-header">'
                        + '<div>'
                        + '<a class="back-icon" href="view-order.php"><svg stroke="currentColor" fill="#D9D9D9" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M2 12c0 5.52 4.48 10 10 10s10-4.48 10-10S17.52 2 12 2 2 6.48 2 12zm10-1h4v2h-4v3l-4-4 4-4v3z"></path></svg></a>'
                        + '<p><b>' + result.order_details[0].order.status.toUpperCase() + '</b><br><span class="text-grey">' + result.order_details[0].order.create_date + '</span></p>'
                        + '<p><b>TOTAL</b><br><span class="text-grey">₹ ' + result.order_details[0].order.total_product_value + '</span></p>'
                        + '<p><b>PAYMENT METHOD</b><br><span class="text-grey">Not available</span></p>'
                        + '</div>'
                        + '<p><b>ORDER ID: ' + result.order_details[0].order.order_id + '</b></p>'
                        + '</div><div class="order-content">'
                        + '<div>' + orderProduct
                        + '<div class="total-amount">'
                        + '<p>Price Details (' + result.order_details[0].product.length + ' Items)</p>'
                        + '<p class="text-grey"><span>Total MRP:</span><span>₹ ' + result.order_details[0].order.total_amount_to_be_paid + '</span></p>'
                        + '<p><span>Total Amount:</span><span>₹ ' + result.order_details[0].order.total_amount_to_be_paid + '</span></p>'
                        + '</div>'
                        + '</div>'
                        + '<div>'
                        + '<div>'
                        + '<p>Shipping Details:</p>'
                        + '<p class="text-grey">' + result.order_details[0].customer.name + ', ' + result.order_details[0].customer.address + ', ' + result.order_details[0].customer.locality + ', ' + result.order_details[0].customer.city + ', ' + result.order_details[0].customer.pincode + '</p>'
                        + '<br><p>Billing Details:</p>'
                        + '<p class="text-grey">' + result.order_details[0].customer.name + ', ' + result.order_details[0].customer.address + ', ' + result.order_details[0].customer.locality + ', ' + result.order_details[0].customer.city + ', ' + result.order_details[0].customer.pincode + '</p>'
                        + '<br><p>Customer Details:</p>'
                        + '<p class="text-grey">Name: ' + result.order_details[0].contact.title + ' ' + result.order_details[0].contact.contact_person + ', Phone: ' + result.order_details[0].contact.phone + ', Email: ' + result.order_details[0].contact.email + '</p>'
                        + '</div>'
                        + '<div class="order-footer">'
                        + '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="30" fill="#BF360C" width="22" height="12"></rect><g fill="#FFA726"><circle cx="10" cy="26" r="4"></circle><circle cx="38" cy="26" r="4"></circle></g><path fill="#FFB74D" d="M39,19c0-12.7-30-8.3-30,0c0,1.8,0,8.2,0,10c0,8.3,6.7,15,15,15s15-6.7,15-15C39,27.2,39,20.8,39,19z"></path><g fill="#784719"><circle cx="30" cy="26" r="2"></circle><circle cx="18" cy="26" r="2"></circle></g><path fill="#FF5722" d="M24,2C15.5,2,3,7.8,3,35.6L13,42V24l16.8-9.8L35,21v21l10-8.2c0-5.6-0.9-29-15.4-29L28.2,2H24z"></path><path fill="#757575" d="M45,24c-0.6,0-1,0.4-1,1v-7c0-8.8-7.2-16-16-16h-9c-0.6,0-1,0.4-1,1s0.4,1,1,1h9c7.7,0,14,6.3,14,14v10 c0,0.6,0.4,1,1,1s1-0.4,1-1v2c0,3.9-3.1,7-7,7H24c-0.6,0-1,0.4-1,1s0.4,1,1,1h13c5,0,9-4,9-9v-5C46,24.4,45.6,24,45,24z"></path><g fill="#37474F"><path d="M45,22h-1c-1.1,0-2,0.9-2,2v4c0,1.1,0.9,2,2,2h1c1.1,0,2-0.9,2-2v-4C47,22.9,46.1,22,45,22z"></path><circle cx="24" cy="38" r="2"></circle></g></svg>'
                        + '<h4>Need Help With Your Order?</h4>'
                        + '<a href="' + '/views/search-details.html?search=' + search_query + '">Get help & support</a>'
                        + '</div>'
                        + '</div>'
                        + '</div>'
                        + '</div>';
                    $("#kapchat_web_faq").html(orderData);
                } else {
                    let errorMsg = '<p class="box error-message">Sorry, We are unable to find any data.</p>';
                    $("#kapchat_web_faq").html(errorMsg);
                }
            }
        });
    } else {
        let errorMsg = '<p class="box error-message">Sorry, You don\'t have permission to view this page.</p>';
        $("#kapchat_web_faq").html(errorMsg);
    }
    removeLoader();
}

//view-article.php page's js code here.
function articleViewPageAction(article) {
    let faqContentDetailsDiv = '<div class="faq-display w-full"><ul>';
    $.ajax({
        url: baseUrl + 'articles/view',
        contentType: "application/json",
        headers: {
            // token: sessionStorage.getItem("api-token"),
        },
        type: 'POST', data: JSON.stringify({ "article-id": article }), dataType: "json",
        success: function (result) {
            if (result.message === logout_message) {
                tokenExpire();
            }
            if (result.status) {
                faqContentDetailsDiv = faqContentDetailsDiv + '<li><p class="d-flex s-between subcat-lists fw-2 active final-list">'
                    + result.data.details.title
                    + '</p><ul class="faq-content-child"><li><div>'
                    + result.data.details.detail
                    + '</div></li></ul></li>';
            } else {
                faqContentDetailsDiv = faqContentDetailsDiv + '<li>'
                    + '<li><p class="d-flex s-between subcat-lists fw-2 active"><a href="#">No data found...</a></p></li>'
                    + '</li>'
            }
            faqContentDetailsDiv = faqContentDetailsDiv + '</ul></div>';
            $("#kapchat_web_faq").html(faqContentDetailsDiv);
            $("#kapchat_web_faq .faq-display div, #kapchat_web_faq .faq-display p, #kapchat_web_faq .faq-display span").removeAttr("style");
        }
    });
    removeLoader();
}

function removeLoader() {
    $("#loader").fadeOut(600, function () {
        $(this).remove();
    });
}
function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    const num = parseInt(hex, 16);
    const red = (num >> 16) & 255;
    const green = (num >> 8) & 255;
    const blue = num & 255;
    return `${red}, ${green}, ${blue}`;
}

$(function () {

    $('a[href="#"]').on('click', function (e) {
        e.preventDefault()
    })
    $('#kapchat_web_faq').on('click', 'a[href="#"]', function (e) {
        e.preventDefault()
    })

    $("#header .nav-toggler").on('click', function () {
        $('#header .header-links').toggleClass('show')
    })
    $(document).on('click', function (event) {
        if (!$(event.target).closest('#header .header-profile').length) {
            $('#header .header-profile .profile-toggler').removeClass('show');
        }
    })
    $('#header .header-profile').on('click', function (event) {
        event.stopPropagation();
        $('#header .header-profile .profile-toggler').addClass('show')
    })

    $(document).on("click", "#kapchat_web_faq .subcat-lists:not(.final-list)", function () {
        $(this).parent().siblings().find('.subcat-lists').removeClass('active');
        $(this).parent().siblings().find('.subcat-lists span').text("+");
        $(this).toggleClass('active');
        if ($(this).hasClass('active'))
            $(this).find("span").text("-");
        else
            $(this).find("span").text("+");
    });

    $('.sort-by-ticket select[name="sort"]').on("change", function () {
        var selectedOption = $(this).val();
        if (selectedOption == "all") {
            $(".ticket-box").show();
        } else {
            $(".ticket-box").hide();
            $(".ticket-box." + selectedOption).show();
        }
    });
    $(document).on("click", ".was-helpful .like-btn, .was-helpful .dislike-btn", function () {
        const params = new URLSearchParams(window.location.search);
        let childId = params.get('childId');
        let actionId = 2
        if ($(this).attr('class') == "like-btn")
            actionId = 1
        $.ajax({
            url: baseUrl + '/controller/submitFaqFeedback.php',
            dataType: "json", type: "POST",
            data: { content_id: childId, type: actionId, payload: key }
        });
        let successDiv = '<h4 class="success-message">'
            + '<svg stroke="currentColor" fill="#439c46" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path></svg>'
            + 'Thank you for your feedback</h4>'
        $('.was-helpful').html(successDiv);
    });

});

(function () {
    let uiConfig = JSON.parse(sessionStorage.getItem("ui-config"));
    console.log(uiConfig)
    if (uiConfig != '' && uiConfig != null) {
        if (uiConfig.kapchat_general_settings.is_header) {
            if (uiConfig.kapchat_general_settings.logo_url != '' && uiConfig.kapchat_general_settings.logo_url != null) {
                $("#header .header-logo").html('<a href="' + baseUrl + '/index.html"><img src="' + "/assets/images/kapture_logo.png" + '" alt="Brand Logo" /></a>');
            }
            if (uiConfig.kapchat_general_settings.fav_icon_url != '' && uiConfig.kapchat_general_settings.fav_icon_url != null) {
                $('head').append($('<link>', { rel: 'icon', type: 'image/x-icon' }).attr('href', uiConfig.kapchat_general_settings.fav_icon_url));
            }
            if (uiConfig.kapchat_general_settings.theme_color != '' && uiConfig.kapchat_general_settings.theme_color != null) {
                let colorThemeRgb = hexToRgb(uiConfig.kapchat_general_settings.theme_color)
                $(':root').css('--color-theme', colorThemeRgb)
            }
            if (uiConfig.kapchat_general_settings.primary_color != '' && uiConfig.kapchat_general_settings.primary_color != null) {
                let colorPrimaryRgb = hexToRgb(uiConfig.kapchat_general_settings.primary_color)
                $(':root').css('--color-primary', colorPrimaryRgb)
            }
            if (uiConfig.kapchat_general_settings.secondry_color != '' && uiConfig.kapchat_general_settings.secondry_color != null) {
                let colorSecondaryRgb = hexToRgb(uiConfig.kapchat_general_settings.secondry_color)
                $(':root').css('--color-secondry', colorSecondaryRgb);
            }
            if (uiConfig.kapchat_header_menu_detail.faq_detail.is_faq) {
                let linkText = uiConfig.kapchat_header_menu_detail.faq_detail.faq_text;
                let linkUrl = baseUrl + "/index.html";
                let currentPage = window.location.pathname.split('/').pop();
                let isActive = (linkUrl.split('/').pop() == currentPage) ? 'active' : '';
                if ((currentPage == 'sub-category.php' || currentPage == 'subcategory-content.php' || currentPage == 'subcategory-content-details.php') && linkUrl.split('/').pop() == 'index.php') {
                    isActive = 'active';
                }
                let htmlNavLinks = '<li><a class="header-link ' + isActive + '" href="' + "/index.html" + '">' + linkText + '</a></li>';
                $('#header .header-links').append(htmlNavLinks);
            }
            if (uiConfig.kapchat_header_menu_detail.view_ticket_details.is_view_ticket) {
                let linkText = uiConfig.kapchat_header_menu_detail.view_ticket_details.view_ticket_text;
                let linkUrl = baseUrl + "/views/view-ticket.html";
                let currentPage = window.location.pathname.split('/').pop();
                let isActive = (linkUrl.split('/').pop() == currentPage) ? 'active' : '';
                if (currentPage == 'view-ticket-details.html' && linkUrl.split('/').pop() == 'view-ticket.html') {
                    isActive = 'active';
                }
                let htmlNavLinks = '<li><a class="header-link ' + isActive + '" href="' + "/views/view-ticket.html" + '">' + linkText + '</a></li>';
                $('#header .header-links').append(htmlNavLinks);
            }
            if (uiConfig.kapchat_header_menu_detail.order_detail.is_order) {
                let linkText = uiConfig.kapchat_header_menu_detail.order_detail.order_text;
                let linkUrl = baseUrl + "/views/view-order.html";
                let currentPage = window.location.pathname.split('/').pop();
                let isActive = (linkUrl.split('/').pop() == currentPage) ? 'active' : '';
                if (currentPage == 'view-order-details.html' && linkUrl.split('/').pop() == 'view-order.html') {
                    isActive = 'active';
                }
                let htmlNavLinks = '<li><a class="header-link ' + isActive + '" href="' + "/views/view-order.html" + '">' + linkText + '</a></li>';
                $('#header .header-links').append(htmlNavLinks);
            }
            if (uiConfig.kapchat_header_menu_detail.add_ticket_detail.is_create_ticket) {
                let linkText = uiConfig.kapchat_header_menu_detail.add_ticket_detail.add_ticket_text;
                let linkUrl = baseUrl + "/views/add-ticket.html";
                let currentPage = window.location.pathname.split('/').pop();
                let isActive = (linkUrl.split('/').pop() == currentPage) ? 'active' : '';
                let htmlNavLinks = '<li><a class="header-link ' + isActive + '" href="' + "/views/add-ticket.html" + '">' + linkText + '</a></li>';
                $('#header .header-links').append(htmlNavLinks);
            }
            if (userType == "Guest") {
                delete uiConfig.kapchat_header_menu_detail.order_detail;
                delete uiConfig.kapchat_header_menu_detail.view_ticket_details;
            }
            if (uiConfig.kapchat_header_details.is_header_menu) {
                $("#header").css({ "background-color": uiConfig.kapchat_header_details.header_bg_color });
                $("#header").css({ "color": uiConfig.kapchat_header_details.header_text_color });
            }
            $('#header').after('<div class="header-conflict"></div>');
            $("#header").css({ "display": "flex" });
        } else {
            $("#header").remove();
            $(".header-conflict").remove();
        }
        if (uiConfig.kapchat_header_menu_detail.add_ticket_detail.is_create_ticket) {
            $("#articles .submit-query").css({ "display": "flex" });
        } else {
            $("#articles .submit-query").remove();
        }
        if (uiConfig.kapchat_general_settings.is_banner) {
            if (uiConfig.kapchat_banner_detail.banner_bg_img != null && uiConfig.kapchat_banner_detail.banner_bg_img != '') {
                $("#banner").css({ 'background-image': 'url(' + uiConfig.kapchat_banner_detail.banner_bg_img + ')' });
            }
            if (uiConfig.kapchat_banner_detail.is_search) {
                $("#banner .input").css({ "display": "flex" });
            }
            if (uiConfig.kapchat_banner_detail.banner_type != null && uiConfig.kapchat_banner_detail.banner_type != '') {
                $("#banner").addClass(uiConfig.kapchat_banner_detail.banner_type);
            }
            if (uiConfig.kapchat_banner_detail.banner_bg_color != null && uiConfig.kapchat_banner_detail.banner_bg_color != '') {
                $("#banner").css({ "background-color": uiConfig.kapchat_banner_detail.banner_bg_color });
            }
            if (uiConfig.kapchat_banner_detail.banner_side_img != null && uiConfig.kapchat_banner_detail.banner_side_img != '') {
                $("#banner .banner-image").html('<img src="' + uiConfig.kapchat_banner_detail.banner_side_img + '" alt="banner image" />');
            }
            if (uiConfig.kapchat_banner_detail.banner_title != null && uiConfig.kapchat_banner_detail.banner_title != '') {
                $("#banner .banner-title").text(uiConfig.kapchat_banner_detail.banner_title);
            }
            if (uiConfig.kapchat_banner_detail.banner_description != null && uiConfig.kapchat_banner_detail.banner_description != '') {
                $("#banner .banner-paragraph").text(uiConfig.kapchat_banner_detail.banner_description);
            }
            $("#banner").css({ "display": "block" });
        } else {
            $("#banner").remove();
        }
        if (uiConfig.kapchat_general_settings.is_footer) {
            if (uiConfig.kapchat_footer_detail.footer_contents.call_detail.is_call) {
                $("#footer .footer-top-container").append(
                    '<div class="box box-phone">'
                    + '<div class="icon"><svg stroke="#fff" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div>'
                    + '<h4>' + uiConfig.kapchat_footer_detail.footer_contents.call_detail.title + '</h4>'
                    + '<a href="tel:' + uiConfig.kapchat_footer_detail.footer_contents.call_detail.phone_number + '" class="badge">' + uiConfig.kapchat_footer_detail.footer_contents.call_detail.phone_number + '</a>'
                    + '</div>'
                );
            }
            if (uiConfig.kapchat_footer_detail.footer_contents.footer_description.is_description) {
                $("#footer .footer-top-container").append(
                    '<div class="box">'
                    + '<img class="logo" src="' + "/assets/images/kapture_logo.png" + '" alt="logo" />'
                    + '<p class="desc">' + uiConfig.kapchat_footer_detail.footer_contents.footer_description.description_text + '</p>'
                    + '</div>'
                );
            }
            if (uiConfig.kapchat_footer_detail.footer_contents.email_detail.is_email) {
                $("#footer .footer-top-container").append(
                    '<div class="box box-email">'
                    + '<div class="icon"><svg stroke="#fff" fill="none" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg></div>'
                    + '<h4>' + uiConfig.kapchat_footer_detail.footer_contents.email_detail.title + '</h4>'
                    + '<a href="mailto:' + uiConfig.kapchat_footer_detail.footer_contents.email_detail.email_id + '" class="badge">' + uiConfig.kapchat_footer_detail.footer_contents.email_detail.email_id + '</a>'
                    + '</div>'
                );
            }
            if (uiConfig.kapchat_footer_detail.footer_contents.copyright != null && uiConfig.kapchat_footer_detail.footer_contents.copyright != '') {
                $("#footer .footer-bottom").append(
                    '<p>' + uiConfig.kapchat_footer_detail.footer_contents.copyright + '</p>'
                );
            }
            $("#footer").css({ "display": "block" });
        } else {
            $("#footer").remove();
        }
    }
    $.ajax({
        url: 'https://apps.designcan.in/kapture_db/get-offset-kms-analytics?cm_id=8400&limit=3',
        type: 'GET',
        dataType: "json",
        success: function (result) {
            if (result.message === logout_message) {
                tokenExpire();
            }
            let htmlData = '';
            for (i = 0; i < result.length; i++) {
                htmlData = htmlData + '<a href="' + '/views/view-article.html?article=' + result[i].faq_id + '" class="article">'
                    + `<p class="text-opa-5"> Article ${i + 1}</p>`
                    + '<h4> Views ' + result[i].faq_title + '</h4>'
                    + '<p class="text-opa-5"> Views ' + result[i].count + '</p>'
                    + '</a>';
            }
            $("#articles .articles-box").html(htmlData);
        }
    });
    $("#kap-snippet").attr({
        "data-supportkey": supportKey,
        "data-customercode": customercode,
        "data-iv": iv
    });

})();

function addFiles(input) {
    for (const file of input.files) {
        console.log(file)
        selectedFiles.push(file);

        const filePreview = document.createElement('div');
        filePreview.classList.add('file-preview');

        if (file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function (event) {
                const img = document.createElement('img');
                img.src = event.target.result;
                // img.width = 100;
                filePreview.appendChild(img);

                appendFileName(file.name, filePreview);  // Ensure file name is appended after image
            }
            reader.readAsDataURL(file);
        } else {
            const iconPath = fileTypeIcons[file.type] || fileTypeIcons.default;
            const fileIcon = document.createElement('img');
            fileIcon.src = iconPath;
            // fileIcon.width = 100;
            filePreview.appendChild(fileIcon);

            appendFileName(file.name, filePreview);  // Append file name after icon
        }

        const removeBtn = document.createElement('span');
        removeBtn.classList.add('remove-file');
        removeBtn.innerHTML = 'x';
        removeBtn.onclick = function () {
            const index = selectedFiles.indexOf(file);
            if (index > -1) {
                selectedFiles.splice(index, 1);
            }
            filePreview.remove();
        };

        filePreview.appendChild(removeBtn);
        console.log(filePreview)
        document.getElementById('previewArea').appendChild(filePreview);
    }

    // Clear the input
    input.value = '';
}

function appendFileName(fileName, container) {
    // File name display
    const fileNameDisplay = document.createElement('p');
    fileNameDisplay.textContent = fileName;
    fileNameDisplay.style.textAlign = 'center';
    fileNameDisplay.style.fontSize = '12px';

    container.appendChild(fileNameDisplay);
}

function allowDrop(event) {
    event.preventDefault();
    document.getElementById("dragAndDropArea").classList.add("dragover");
}

function handleDrop(event) {
    event.preventDefault();
    document.getElementById("dragAndDropArea").classList.remove("dragover");
    var files = event.dataTransfer.files;
    handleFiles(files);
}

function triggerFileInput() {
    document.getElementById("fileInput").click();
}

function handleFiles(files) {
    addFiles(files);
}

function addFileByURL() {
    let imageUrl = document.getElementById("image_url").value;
    fetch(imageUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to fetch image. Status code: ${response.status}`);
            }
            return response.blob();
        })
        .then(blob => {
            // Create an object URL for the blob
            const objectUrl = URL.createObjectURL(blob);

            // Create an image element
            const image = new Image();

            // Set the source of the image to the object URL
            image.src = objectUrl;

            // Create a file object with some dummy properties
            const file = {
                name: imageUrl.split('/').pop(),
                type: 'image/png',
            };

            // Simulate adding the file to the selectedFiles array
            selectedFiles.push(file);

            // Create a file preview div
            const filePreview = document.createElement('div');
            filePreview.classList.add('file-preview');

            // Append the image to the file preview
            filePreview.appendChild(image);

            // Append the file name to the file preview
            appendFileName(file.name, filePreview);

            // Create a remove button and append it to the file preview
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove-file');
            removeBtn.innerHTML = 'x';
            removeBtn.onclick = function () {
                const index = selectedFiles.indexOf(file);
                if (index > -1) {
                    selectedFiles.splice(index, 1);
                }
                filePreview.remove();
            };
            filePreview.appendChild(removeBtn);

            // Append the file preview to the previewArea
            document.getElementById('previewArea').appendChild(filePreview);
        })
        .catch(error => {
            console.error(error);
        });
}

function handleAccordion(e) {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    e.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = e.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
}
