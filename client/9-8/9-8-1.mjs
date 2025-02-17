const viewRecords = [
    {
        ID : 1,
        NAME : "山田",
        Age : 23,
        Postcode : "0620055" ,
        Address :"北海道札幌市",
        Average_Score : 81.5,
    },
    {
        ID : 2,
        NAME : "田中",
        Age : 18,
        Postcode : "0590465" ,
        Address :"北海道登別市",
        Average_Score : 71,
    }

]
/**
* ウィンドウ読み込み時の処理
*/
window.onload = () => {
    const kadai98Body = document.getElementById("K9-8-body")
    kadai98Body.innerHTML = ""
    for (const record of viewRecords) {
        const tr = document.createElement("tr")

        kadai98Body.appendChild(tr)
        const IDTd = document.createElement("td")
        IDTd.appendChild(document.createTextNode(record.ID))
        tr.appendChild(IDTd)
        const NAMETd = document.createElement("td")
        NAMETd.appendChild(document.createTextNode(record.NAME))
        tr.appendChild(NAMETd)
        const AgeTd = document.createElement("td")
        AgeTd.appendChild(document.createTextNode(record.Age))
        tr.appendChild(AgeTd)
        const PostcodeTd = document.createElement("td")
        PostcodeTd.appendChild(document.createTextNode(record.Postcode))
        tr.appendChild(PostcodeTd)
        const AddressTd = document.createElement("td")
        AddressTd.appendChild(document.createTextNode(record.Address))
        tr.appendChild(AddressTd)
        const Average_scoreTd = document.createElement("td")
        Average_scoreTd.appendChild(document.createTextNode(record.Average_Score))
        tr.appendChild(Average_scoreTd)
    }
}
