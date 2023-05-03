import cours from "../../data/comp.pdf"
import { Page,Document} from 'react-pdf/dist/esm/entry.vite'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { useState } from "react";
import "../../App.css"
export default function PdfComp(props){

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({numPages}){
      setNumPages(numPages);
      setPageNumber(1);
    }
  
    function changePage(offSet){
      setPageNumber(prevPageNumber => prevPageNumber + offSet);
    }
  
    function changePageBack(){
      changePage(-1)
    }
  
    function changePageNext(){
      changePage(+1)
    }
  
    return (
      <div className="App ">
        <center>
          <div>
            <Document file={cours} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(
                new Array(numPages),
                (el,index) => (
                  <Page 
                    key={`page_${index+1}`}
                    pageNumber={index+1}
                  />
                )
              )}
            </Document>
          </div>
        </center>
      </div>
    );
  }
  