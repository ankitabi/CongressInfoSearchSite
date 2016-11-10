function myFun() {
    if (document.getElementById("mySidenav").style.width == "0%") {
        openNav();
    }
    else {
        closeNav();
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "11%";
    document.getElementById("legislatorsPage").style.width = "89%";
    document.getElementById("legislatorsPage").style.marginLeft = "11%";
    document.getElementById("billsPage").style.width = "89%";
    document.getElementById("billsPage").style.marginLeft = "11%";
    document.getElementById("committeesPage").style.width = "89%";
    document.getElementById("committeesPage").style.marginLeft = "11%";
    document.getElementById("favoritesPage").style.width = "89%";
    document.getElementById("favoritesPage").style.marginLeft = "11%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.getElementById("legislatorsPage").style.width = "100%";
    document.getElementById("legislatorsPage").style.marginLeft = "0%";
    document.getElementById("billsPage").style.width = "100%";
    document.getElementById("billsPage").style.marginLeft = "0%";
    document.getElementById("committeesPage").style.width = "100%";
    document.getElementById("committeesPage").style.marginLeft = "0%";
    document.getElementById("favoritesPage").style.width = "100%";
    document.getElementById("favoritesPage").style.marginLeft = "0%";
}

function changeContents(flag) {
    $('#legislatorsPage').css('display', 'none');
    $('#billsPage').css('display', 'none');
    $('#committeesPage').css('display', 'none');
    $('#favoritesPage').css('display', 'none');
    $('#l').css('color', 'gray');
    $('#b').css('color', 'gray');
    $('#c').css('color', 'gray');
    $('#f').css('color', 'gray');
    $('#limg').css('color', 'gray');
    $('#bimg').css('color', 'gray');
    $('#cimg').css('color', 'gray');
    $('#fimg').css('color', 'gray');
    if (flag == 0) {
        $('#legislatorsPage').css('display', 'block');
        $('#l').css('color', 'white');
        $('#limg').css('color', 'white');
    }
    else if (flag == 1) {
        $('#billsPage').css('display', 'block');
        $('#b').css('color', 'white');
        $('#bimg').css('color', 'white');
    }
    else if (flag == 2) {
        $('#committeesPage').css('display', 'block');
        $('#c').css('color', 'white');
        $('#cimg').css('color', 'white');
    }
    else {
        $('#favoritesPage').css('display', 'block');
        $('#f').css('color', 'white');
        $('#fimg').css('color', 'white');
    }
}

function dateFormat(olddate) {
    var dateformat = "";
    var temp = olddate.split("-");
    dateformat = temp[1] + "-" + temp[2] + "-" + temp[0];
    return dateformat;
}

function parseLink(link) {
    var Httpreq = new XMLHttpRequest();
    Httpreq.open("GET", link, false);
    Httpreq.send(null);
    var jsonresult = JSON.parse(Httpreq.responseText);
    return jsonresult;
}

function parseAsync(link, callbackFunc) {
    $.ajax({
        url: link
        , type: 'GET'
        , success: function (response, status, xhr) {
            callbackFunc(response);
        }
        , error: function (xhr, status, error) {}
    });
}

function selectChange() {
    var selection = document.getElementById("selectState").value;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "All States") {
        scope.$apply(function () {
            scope.filtering = "!";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.filtering = selection;
            scope.currentPage = 1;
        })
    }
}
var personResults = "";
var billResults = "";
var billStatus;
var imgTag = "";
var status = "";

function filterHouse() {
    var selection = document.getElementById("input_hFilter").value;
    //var fil = selection.options[selection.selectedIndex].innerHTML;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.houseFilter = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.houseFilter = selection;
            scope.currentPage = 1;
        })
    }
}

function filterSenate() {
    var selection = document.getElementById("input_sFilter").value;
    //var fil = selection.options[selection.selectedIndex].innerHTML;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.senateFilter = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.senateFilter = selection;
            scope.currentPage = 1;
        })
    }
}

function hfilterCommittee() {
    var selection = document.getElementById("input_hcFilter").value;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.fhousecommittee = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.fhousecommittee = selection;
            scope.currentPage = 1;
        })
    }
}

function sfilterCommittee(flag) {
    var selection = document.getElementById("input_scFilter").value;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.fsenatecommittee = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.fsenatecommittee = selection;
            scope.currentPage = 1;
        })
    }
}

function jfilterCommittee(flag) {
    var selection = document.getElementById("input_jcFilter").value;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.fjointcommittee = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.fjointcommittee = selection;
            scope.currentPage = 1;
        })
    }
}

function nfilterBill() {
    var selection = document.getElementById("input_nbFilter").value;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.fnewbill = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.fnewbill = selection;
            scope.currentPage = 1;
        })
    }
}

function afilterBill() {
    var selection = document.getElementById("input_abFilter").value;
    var scope = angular.element($("#mainController")).scope();
    if (selection == "") {
        scope.$apply(function () {
            scope.factivebill = "";
            scope.currentPage = 1;
        })
    }
    else {
        scope.$apply(function () {
            scope.factivebill = selection;
            scope.currentPage = 1;
        })
    }
}

function checkFavCommittees(cId) {
    var scope = angular.element($("#mainController")).scope();
    var found = 0;
    scope.favCommittees.forEach(function (result, index) {
        if (result['comId'] === cId) {
            found = 1;
        }
    });
    if (found == 1) {
        return true;
    }
}

function arrayindexget(array, p, cId) {
    var ind = -1;
    array.forEach(function (result, index) {
        if (result[p] === cId) {
            //alert("index: " + index);
            ind = index;
        }
    });
    return ind;
}

function saveFLegis() {
    var scope = angular.element($("#mainController")).scope();
    var found = 0;
    scope.favLegislators.forEach(function (result, index) {
        if (result['bioid'] === personResults.bioguide_id) {
            found = 1;
            document.getElementById('favLegBtn').style.color = "white";
            scope.favLegislators.forEach(function (result, index) {
                if (result['bioid'] === personResults.bioguide_id) {
                    scope.$apply(function () {
                        scope.favLegislators.splice(index, 1);
                    });
                }
            });
            localStorage.setItem("favLegis", JSON.stringify(scope.favLegislators));
        }
    });
    if (found == 0) {
        document.getElementById('favLegBtn').style.color = "yellow";
        var chamb = personResults.chamber;
        if (chamb == "house") {
            chamb = "House";
            cImg = "h.png";
        }
        else {
            chamb = "Senate";
            cImg = "s.svg";
        }
        var party = personResults.party;
        var partyImg = "";
        if (party == "R") {
            party = "Republic";
            partyImg = "r.png";
        }
        else {
            party = "Democrat";
            partyImg = "d.png";
        }
        imgTag = "https://theunitedstates.io/images/congress/original/" + personResults.bioguide_id + ".jpg";
        scope.$apply(function () {
            scope.favLegislators.push({
                cImage: cImg
                , image: imgTag
                , lastname: personResults.last_name
                , firstname: personResults.first_name
                , chamber: chamb
                , state: personResults.state_name
                , email: personResults.oc_email
                , party: personResults.party
                , partyImage: partyImg
                , bioid: personResults.bioguide_id
            });
        });
        localStorage.setItem("favLegis", JSON.stringify(scope.favLegislators));
    }
}

function saveFavBill() {
    var scope = angular.element($("#mainController")).scope();
    var found = 0;
    scope.favBills.forEach(function (result, index) {
        if (result['billId'] === billResults.bill_id) {
            found = 1;
            document.getElementById('favBillBtn').style.color = "white";
            scope.favBills.forEach(function (result, index) {
                if (result['billId'] === billResults.bill_id) {
                    //alert("found");
                    scope.$apply(function () {
                        scope.favBills.splice(index, 1);
                    });
                }
            });
            localStorage.setItem("favBills", JSON.stringify(scope.favBills));
        }
    });
    if (found == 0) {
        document.getElementById('favBillBtn').style.color = "yellow";
        var chamb = billResults.chamber;
        if (chamb == "house") {
            chamb = "House";
            cImg = "h.png";
        }
        else {
            chamb = "Senate";
            cImg = "s.svg";
        }
        var party = billResults.party;
        var partyImg = "";
        if (party == "R") {
            party = "Republic";
            // partyImg = "<img src='r.png' width='25px';height='25px';>";
            partyImg = "r.png";
        }
        else {
            party = "Democrat";
            partyImg = "d.png";
        }
        scope.$apply(function () {
            scope.favBills.push({
                billId: billResults.bill_id
                , title: billResults.official_title
                , type: billResults.bill_type
                , cImage: cImg
                , chamber: chamb
                , intro: billResults.introduced_on
                , billFlag: billStatus
                , sponsor: billResults.sponsor.title + ". " + billResults.sponsor.last_name + ", " + billResults.sponsor.first_name
            });
        });
        localStorage.setItem("favBills", JSON.stringify(scope.favBills));
    }
};
var myApp = angular.module('myApp', ['angularUtils.directives.dirPagination']);
var phpServerLink = 'http://hw8environment.us-west-2.elasticbeanstalk.com/?opr=' /*'http://adityajain.us-west-2.elasticbeanstalk.com/index.php'*/ ;

function MyController($scope) {
    //localStorage.clear();
    var states = ['All States', 'Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Puerto Rico', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'US Virgin Islands', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
    var statesList = "";
    for (var i = 0; i < states.length; i++) {
        statesList += "<option>" + states[i] + "</option>";
    }
    document.getElementById('selectState').innerHTML = statesList;
    $scope.currentPage = 1;
    $scope.pageSize = 10;
    $scope.infoByState = [];
    $scope.infoByHouse = [];
    $scope.infoBySenate = [];
    $scope.infoByActiveBill = [];
    $scope.infoByNewBill = [];
    $scope.infoByNewBill = [];
    $scope.infoByNewBill = [];
    $scope.infoByHouseCommittee = [];
    $scope.infoBySenateCommittee = [];
    $scope.infoByJointCommittee = [];
    $scope.filtering = "!";
    $scope.fjointcommittee = "";
    $scope.fhousecommittee = "";
    $scope.fsenatecommittee = "";
    $scope.factivebill = "";
    $scope.fnewbill = "";
    $scope.favCommittees = [];
    $scope.legcurr = "";
    $scope.billcurr = "";
    var stlink = phpServerLink + 'legislators&per_page=all&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    var hlink = phpServerLink + 'legislators&per_page=all&chamber=house&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    //$scope.getinfo(hlink, $scope.infoByHouse, 1);
    var slink = phpServerLink + 'legislators&per_page=all&chamber=senate&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    //$scope.getinfo(slink, $scope.infoBySenate, 2);
    var aBillLink = phpServerLink + 'bills&history.active=true&per_page=50&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    var nBillLink = phpServerLink + 'bills&history.active=false&per_page=50&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    var hCommitteeLink = phpServerLink + 'committees&chamber=house&per_page=all&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    var sCommitteeLink = phpServerLink + 'committees&chamber=senate&per_page=all&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    var jCommitteeLink = phpServerLink + 'committees&chamber=joint&per_page=all&apikey=79b0b4cebe6b484ab5a701f0c9ac2320';
    var retrieveCObject = JSON.parse(localStorage.getItem('favCommittees'));
    if (retrieveCObject != null) {
        $scope.favCommittees = retrieveCObject;
    }
    $scope.favLegislators = [];
    var retrieveLObject = JSON.parse(localStorage.getItem("favLegis"));
    if (retrieveLObject === null) {}
    else {
        $scope.favLegislators = retrieveLObject;
    }
    $scope.favBills = [];
    var retrieveBObject = JSON.parse(localStorage.getItem("favBills"));
    if (retrieveBObject === null) {}
    else {
        $scope.favBills = retrieveBObject;
    }
    var getDummy = localStorage.getItem("dummyObject");
    if (retrieveLObject != null) {
        $scope.favLegislators = retrieveLObject;
    }
    $scope.getcommitteeinfo = function (link, arr, flag) {
        function callbackCommittee(json) {
            //var json = parseLink(link);
            var len = json.results.length;
            //console.log("cm: " + len);
            var a = [];
            for (var i = 0; i < len; i++) {
                var committee = json.results[i];
                var chamb = "";
                var cimg = "";
                if (committee.chamber == "house") {
                    cimg = "h.png";
                    chamb = "House";
                }
                else if (committee.chamber == "senate") {
                    cimg = "s.svg";
                    chamb = "Senate";
                }
                else {
                    chamb = "Joint";
                    cimg = "s.svg";
                }
                var ofc = committee.office;
                if (committee.office == null) {
                    ofc = "N.A.";
                }
                var color = "";
                if (checkFavCommittees(committee.committee_id)) {
                    color = "yellow";
                }
                else {
                    color = "white";
                }
                a.push({
                    committee_id: committee.committee_id
                    , name: committee.name
                    , chamber: chamb
                    , cImages: cimg
                    , parent: committee.parent_committee_id
                    , phone: committee.phone
                    , office: ofc
                    , subcommittee: committee.subcommittee
                    , col: color
                });
            }
            $scope.$apply(function () {
                if (flag == 0) $scope.infoByHouseCommittee = a.slice();
                else if (flag == 1) {
                    $scope.infoBySenateCommittee = a.slice();
                }
                else {
                    $scope.infoByJointCommittee = a.slice();
                }
                /*arr.push({
                    committee_id: committee.committee_id
                    , name: committee.name
                    , chamber: chamb
                    , cImages: cimg
                    , parent: committee.parent_committee_id
                    , phone: committee.phone
                    , office: ofc
                    , subcommittee: committee.subcommittee
                    , col: color
                });*/
            });
        }
        parseAsync(link, callbackCommittee);
    }
    $scope.getbillinfo = function (link, arr, flag) {
        function callbackBill(json) {
            var len = json.results.length;
            for (var i = 0; i < len; i++) {
                var bill = json.results[i];
                var chamb = "";
                var cimg = "";
                if (bill.chamber == "house") {
                    cimg = "h.png";
                    chamb = "House";
                }
                else {
                    cimg = "s.svg";
                    chamb = "Senate";
                }
                $scope.$apply(function () {
                    arr.push({
                        billid: bill.bill_id
                        , title: bill.official_title
                        , billtype: bill.bill_type
                        , chamber: chamb
                        , intro: bill.introduced_on
                        , cImages: cimg
                        , sponsor: bill.sponsor.title + ". " + bill.sponsor.last_name + ", " + bill.sponsor.first_name
                    });
                });
            }
        }
        parseAsync(link, callbackBill);
    }
    $scope.getinfo = function (link, arr, arr1, arr2, flag) {
        function callbackLegis(json) {
            var len = json.results.length;
            var res = json.results;
            var a1 = [];
            var a2 = [];
            var a3 = [];
            for (var i = 0; i < len; i++) {
                var person = res[i];
                var dist = "District " + person.district;
                if (person.district == null) {
                    dist = "N.A.";
                }
                var chamb = "";
                var cimg = "";
                if (person.chamber == "house") {
                    cimg = "h.png";
                    chamb = "House";
                }
                else {
                    cimg = "s.svg";
                    chamb = "Senate";
                }
                var pimg = "";
                if (person.party == "R") {
                    pimg = "r.png";
                }
                else {
                    pimg = "d.png";
                }
                var bioID = person.bioguide_id;
                a1.push({
                    bioid: bioID
                    , party: pimg
                    , name: person.last_name + ', ' + person.first_name
                    , chamber: chamb
                    , district: dist
                    , state: person.state_name
                    , cImages: cimg
                });
                if (person.chamber == "house") {
                    a2.push({
                        bioid: bioID
                        , party: pimg
                        , name: person.last_name + ', ' + person.first_name
                        , chamber: chamb
                        , district: dist
                        , state: person.state_name
                        , cImages: cimg
                    });
                }
                else {
                    a3.push({
                        bioid: bioID
                        , party: pimg
                        , name: person.last_name + ', ' + person.first_name
                        , chamber: chamb
                        , district: dist
                        , state: person.state_name
                        , cImages: cimg
                    });
                }
            }
            $scope.$apply(function () {
                $scope.infoByState = a1.slice();
                $scope.infoByHouse = a2.slice();
                $scope.infoBySenate = a3.slice();
            });
            $scope.getbillinfo(aBillLink, $scope.infoByActiveBill);
            $scope.getbillinfo(nBillLink, $scope.infoByNewBill);
            $scope.getcommitteeinfo(hCommitteeLink, $scope.infoByHouseCommittee, 0);
            $scope.getcommitteeinfo(sCommitteeLink, $scope.infoBySenateCommittee, 1);
            $scope.getcommitteeinfo(jCommitteeLink, $scope.infoByJointCommittee, 2);
        }
        parseAsync(link, callbackLegis);
    }
    $scope.getinfo(stlink, $scope.infoByState, $scope.infoByHouse, $scope.infoBySenate, 0);
    $scope.pageChangeHandler = function (num) {
        console.log('infoByState page changed to ' + num);
    };
    $scope.fetchDetails = function (bioid) {
        $scope.legcurr = bioid;
        $('#stateCarousel').carousel(1);
        imgTag = "https://theunitedstates.io/images/congress/original/" + bioid + ".jpg";
        var imgInfo = "<img src='" + imgTag + "' width='170px';height='170px';>";
        document.getElementById('personImageDiv').innerHTML = imgInfo;
        var favButton = "<button type='button' class='btn btn-default pull-right'  style='margin:10px;' onclick='saveFLegis()' ><span class='glyphicon glyphicon-star' style='color:white; text-shadow:0 0 1px  black,0 0 1px  black,0 0 1px  black,0 0 1px  black ;' id='favLegBtn' ></span></button>"
        document.getElementById('favBtn').innerHTML = favButton;
        var personInfoLink = 'http://congress.api.sunlightfoundation.com/legislators?bioguide_id=' + bioid + '&apikey=6a516af642a845cfaf2478313971bf81';

        function LegisDetailsCallback(personInfoJson) {
            personResults = personInfoJson.results[0];
            var chamb = personResults.chamber;
            if (chamb == "house") {
                chamb = "House";
            }
            else {
                chamb = "Senate";
            }
            var party = personResults.party;
            var partyImg = "";
            if (party == "R") {
                party = "Republic";
                partyImg = "<img src='r.png' width='25px';height='25px';>";
            }
            else {
                party = "Democrat";
                partyImg = "<img src='d.png' width='25px';height='25px';>";
            }
            var personinfo = "<div class='table-responsive'><table class='table'>";
            personinfo += "<tr><td>" + personResults.title + ". " + personResults.first_name + ", " + personResults.last_name + "</td></tr>";
            personinfo += "<tr><td><a href=mailto:" + personResults.oc_email + " target='_blank'>" + personResults.oc_email + "</a></td></tr>";
            personinfo += "<tr><td>Chamber: " + chamb + "</td></tr>";
            personinfo += "<tr><td>Contact: <a href='tel:+1" + personResults.phone + "'>" + personResults.phone + "</a></td></tr>";
            personinfo += "<tr><td>" + partyImg + " " + party + "</td></tr>";
            personinfo += "</table></div>";
            document.getElementById("personDetailsDiv").innerHTML = personinfo;
            var fbImg = "<img src='f.png' width='30px';height='30px';>";
            var fb = "";
            if (personResults.facebook_id == null) {
                fb = "";
            }
            else {
                fb = "<a href = 'https://www.facebook.com/" + personResults.facebook_id + "' target=_blank>" + fbImg + "</a>";
            }
            var twitter = "";
            var twitterImg = "<img src='t.png' width='30px';height='30px';>";
            if (personResults.twitter_id == null) {
                twitter = "";
            }
            else {
                twitter = "<a href = 'https://twitter.com/" + personResults.twitter_id + "' target=_blank>" + twitterImg + "</a>";
            }
            var web = "";
            var webImg = "<img src='w.png' width='30px';height='30px';>";
            if (personResults.website == null) {
                web = "";
            }
            else {
                web = "<a href ='" + personResults.website + "' target=_blank>" + webImg + "</a>";
            }
            var socialInfo = "<div class='table-responsive'><table class='table'>";
            socialInfo += "<tr><td>Start Term</td><td>" + dateFormat(personResults.term_start) + "</td></tr>";
            socialInfo += "<tr><td>End Term</td><td>" + dateFormat(personResults.term_end) + "</td></tr>";
            var dateToday = new Date();
            var end = new Date(personResults.term_end);
            var start = new Date(personResults.term_start);
            var progress = Math.floor((dateToday.getTime() - start.getTime()) / (end.getTime() - start.getTime()) * 100);
            var progressDiv = "<div class='progress' style='height:25px;'><div class='progress-bar progress-bar-success' role='progressbar' aria-valuenow='" + progress + "'  aria-valuemin='0' aria-valuemax='100' style='width:" + progress + "%'>" + progress + "%</div></div>"
            socialInfo += "<tr><td>Term</td><td>" + progressDiv + "</td></tr>";
            socialInfo += "<tr><td>Office</td><td>" + personResults.office + "</td></tr>";
            socialInfo += "<tr><td>State</td><td>" + personResults.state_name + "</td></tr>";
            socialInfo += "<tr><td>Fax</td><td> <a href='fax:+1" + personResults.fax + "'>" + personResults.fax + "</td></tr>";
            socialInfo += "<tr><td>Birtday</td><td>" + dateFormat(personResults.birthday) + "</td></tr>";
            socialInfo += "<tr><td>Social Links</td><td>" + fb + " " + twitter + " " + web + "</td>";
            socialInfo += "</table></div>";
            document.getElementById("socialinfo").innerHTML = socialInfo;
            var personCommitteesLink = 'http://congress.api.sunlightfoundation.com/committees?member_ids=' + bioid + '&apikey=6a516af642a845cfaf2478313971bf81';

            function LegisDetailsCommitteeCallback(personCommitteesJson) {
                //var personCommitteesJson = parseLink(personCommitteesLink);
                var committeesResult = personCommitteesJson.results;
                var len = personCommitteesJson.results.length;
                var committeeInfo = "<h3>Committees</h3><div class='table-responsive'><table class='table' id='lCommitteesTable'>";
                committeeInfo += "<tr><th>Chamber</th><th>Committee ID</th><th>Name</th></tr>";
                for (var i = 0; i < len && i < 5; i++) {
                    var house = "House";
                    if (committeesResult[i].chamber == "senate") {
                        house = "Senate";
                    }
                    committeeInfo += "<tr><td>" + house + "</td><td>" + committeesResult[i].committee_id + "</td><td>" + committeesResult[i].name + "</td></tr>";
                }
                committeeInfo += "</table></div>";
                document.getElementById("committeesDiv").innerHTML = committeeInfo;
            }
            parseAsync(personCommitteesLink, LegisDetailsCommitteeCallback);
            var personBillLink = 'http://congress.api.sunlightfoundation.com/bills?sponsor_id=' + bioid + '&apikey=6a516af642a845cfaf2478313971bf81';

            function LegisDetailsBillsCallback(personBillJson) {
                // var personBillJson = parseLink(personBillLink);
                var billResult = personBillJson.results;
                var len = personBillJson.results.length;
                var billInfo = "<h3>Bills</h3><div class='table-responsive'><table class='table' id='lBillTable'>";
                billInfo += "<tr><th>Bill ID</th><th>Title</th><th>Chamber</th><th>Bill Type</th><th>Congress</th><th>Link</th></tr>";
                for (var i = 0; i < len && i < 5; i++) {
                    var billLink = "";
                    billInfo += "<tr><td>" + billResult[i].bill_id + "</td><td>" + billResult[i].official_title + "</td><td>" + billResult[i].chamber + "</td><td>" + billResult[i].bill_type + "</td><td>" + billResult[i].congress + "</td>";
                    if (billResult[i].last_version != null && billResult[i].last_version.urls != null && billResult[i].last_version.urls.pdf != null) billInfo += "<td><a href='" + billResult[i].last_version.urls.pdf + "' target='_blank'>Link<a></td>";
                    billInfo += "</tr>";
                }
                billInfo += "</table></div>";
                document.getElementById("billsDiv").innerHTML = billInfo;
            }
            parseAsync(personBillLink, LegisDetailsBillsCallback);
            $scope.favLegislators.forEach(function (result, index) {
                if (result['bioid'] === personResults.bioguide_id) {
                    document.getElementById('favLegBtn').style.color = "yellow";
                }
            });
        }
        parseAsync(personInfoLink, LegisDetailsCallback);
    };
    $scope.fetchBillDetails = function (billid, flag) {
        $scope.billcurr = billid;
        $('#billCarousel').carousel(1);
        var billInfoLink = 'http://congress.api.sunlightfoundation.com/bills?bill_id=' + billid + '&apikey=6a516af642a845cfaf2478313971bf81';

        function billDetailsCallback(billInfoJson) {
            billResults = billInfoJson.results[0];
            var favBillButton = "<button type='button' class='btn btn-default pull-right' onclick='saveFavBill()' style='margin:10px;'><span class='glyphicon glyphicon-star' style='color:white; text-shadow:0 0 1px  black,0 0 1px  black,0 0 1px  black,0 0 1px  black ;' id='favBillBtn' ></span></button>"
            document.getElementById('billFavBtn').innerHTML = favBillButton;
            var chamb = billResults.chamber;
            if (chamb == "house") {
                chamb = "House";
            }
            else {
                chamb = "Senate";
            }
            status = "";
            var billinfo = "<table style='margin-top:20px' class='table'>";
            billinfo += "<tr><td>Bill ID</td><td>" + billResults.bill_id + "</td></tr>";
            billinfo += "<tr><td>Title</td><td>" + billResults.official_title + "</a></td></tr>";
            billinfo += "<tr><td>Bill Type</td><td> " + billResults.bill_type + "</td></tr>";
            billinfo += "<tr><td>Sponsor</td><td> " + billResults.sponsor.title + ". " + billResults.sponsor.last_name + ", " + billResults.sponsor.first_name + "</td></tr>";
            billinfo += "<tr><td>Chamber</td><td> " + chamb + "</td></tr>";
            if (flag == 1) {
                status = "New";
                billStatus = 1;
            }
            else {
                status = "Active";
                billStatus = 0;
            }
            billinfo += "<tr><td>Status</td><td> " + status + "</td></tr>";
            billinfo += "<tr><td>Introduced On</td><td>" + dateFormat(billResults.introduced_on) + "</td></tr>";
            billinfo += "<tr><td>Congress URL</td><td><a href=' " + billResults.urls.congress + "' target='_blank'>URL</a></td></tr>";
            billinfo += "<tr><td>Version Status</td><td> " + billResults.last_version.version_name + "</td></tr>";
            billinfo += "<tr><td>Bill URL</td><td><a href=' " + billResults.last_version.urls.pdf + "' target='_blank'>Link</a></td></tr>";
            billinfo += "</table>";
            document.getElementById("billInfo").innerHTML = billinfo;
            billfile = "<object data='" + billResults.last_version.urls.pdf + "' width='100%' height='100%'></object>";
            document.getElementById("billpdf").innerHTML = billfile;
            $scope.favBills.forEach(function (result, index) {
                if (result['billId'] === billResults.bill_id) {
                    document.getElementById('favBillBtn').style.color = "yellow";
                }
            });
        }
        parseAsync(billInfoLink, billDetailsCallback);
    };
    $scope.saveFavCommittee = function (comObject) {
        var found = 0;
        $scope.favCommittees.forEach(function (result, index) {
            if (result['comId'] === comObject.committee_id) {
                found = 1;
                $scope.favCommittees.forEach(function (result, index) {
                    if (result['comId'] === comObject.committee_id) {
                        $scope.favCommittees.splice(index, 1);
                        localStorage.setItem("favCommittees", JSON.stringify($scope.favCommittees));
                        if (arrayindexget($scope.infoByHouseCommittee, 'committee_id', comObject.committee_id) != -1) {
                            var index = arrayindexget($scope.infoByHouseCommittee, 'committee_id', comObject.committee_id);
                            $scope.infoByHouseCommittee[index].col = "white";
                        }
                        else if (arrayindexget($scope.infoBySenateCommittee, 'committee_id', comObject.committee_id) != -1) {
                            var index = arrayindexget($scope.infoBySenateCommittee, 'committee_id', comObject.committee_id);
                            $scope.infoBySenateCommittee[index].col = "white";
                        }
                        else if (arrayindexget($scope.infoByJointCommittee, 'committee_id', comObject.committee_id) != -1) {
                            var index = arrayindexget($scope.infoByJointCommittee, 'committee_id', comObject.committee_id);
                            $scope.infoByJointCommittee[index].col = "white";
                        }
                    }
                });
            }
        });
        if (found == 0) {
            if (arrayindexget($scope.infoByHouseCommittee, 'committee_id', comObject.committee_id) != -1) {
                var index = arrayindexget($scope.infoByHouseCommittee, 'committee_id', comObject.committee_id);
                $scope.infoByHouseCommittee[index].col = "yellow";
            }
            else if (arrayindexget($scope.infoBySenateCommittee, 'committee_id', comObject.committee_id) != -1) {
                var index = arrayindexget($scope.infoBySenateCommittee, 'committee_id', comObject.committee_id);
                $scope.infoBySenateCommittee[index].col = "yellow";
            }
            else if (arrayindexget($scope.infoByJointCommittee, 'committee_id', comObject.committee_id) != -1) {
                var index = arrayindexget($scope.infoByJointCommittee, 'committee_id', comObject.committee_id);
                $scope.infoByJointCommittee[index].col = "yellow";
            }
            var chamb = comObject.chamber;
            if (chamb == "House") {
                chamb = "House";
                cImg = "h.png";
            }
            else if (chamb == "Senate") {
                chamb = "Senate";
                cImg = "s.svg";
            }
            else {
                chamb = "Joint";
                cImg = "s.svg";
            }
            var party = comObject.party;
            var partyImg = "";
            if (party == "R") {
                party = "Republic";
                partyImg = "r.png";
            }
            else {
                party = "Democrat";
                partyImg = "d.png";
            }
            $scope.favCommittees.push({
                cImage: cImg
                , chamber: chamb
                , comId: comObject.committee_id
                , name: comObject.name
                , parent: comObject.parent
                , subCom: comObject.subcommittee
            });
            localStorage.setItem("favCommittees", JSON.stringify($scope.favCommittees));
        }
    };
    $scope.showLegDetails = function (bioid) {
        changeContents(0);
        $scope.fetchDetails(bioid);
    };
    $scope.deleteEntries = function (array, property, value, flag) {
        array.forEach(function (result, index) {
            if (result[property] === value) {
                array.splice(index, 1);
            }
        });
        if (flag == 0) {
            localStorage.setItem("favLegis", JSON.stringify(array));
            if ($scope.legcurr == value) document.getElementById('favLegBtn').style.color = "white";
        }
        else if (flag == 1) {
            localStorage.setItem("favBills", JSON.stringify(array));
            if ($scope.billcurr == value) document.getElementById('favBillBtn').style.color = "white";
        }
        else if (flag == 2) {
            localStorage.setItem("favCommittees", JSON.stringify($scope.favCommittees));
            if (arrayindexget($scope.infoByHouseCommittee, 'committee_id', value) != -1) {
                var index = arrayindexget($scope.infoByHouseCommittee, 'committee_id', value);
                $scope.infoByHouseCommittee[index].col = "white";
            }
            else if (arrayindexget($scope.infoBySenateCommittee, 'committee_id', value) != -1) {
                var index = arrayindexget($scope.infoBySenateCommittee, 'committee_id', value);
                $scope.infoBySenateCommittee[index].col = "white";
            }
            else if (arrayindexget($scope.infoByJointCommittee, 'committee_id', value) != -1) {
                var index = arrayindexget($scope.infoByJointCommittee, 'committee_id', value);
                $scope.infoByJointCommittee[index].col = "white";
            }
        }
    }
    $scope.showBillDetails = function (billid) {
        changeContents(1);
        $scope.fetchBillDetails(billid, billStatus);
    };
}
myApp.controller('MyController', MyController);