/**
 * CouchDB Map Function: get_token
 */

function(doc)
{

  if ( doc.appID     !== undefined &&
       doc.active    === true      &&
       doc.token     !== undefined &&
       doc.generated !== undefined &&
       doc.expiry    !== undefined )
  {
    emit(doc.appID, {
      token:      doc.token,
      generated:  doc.generated,
      expiry:     doc.expiry
    });
  }
  
}
