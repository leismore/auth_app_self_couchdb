/**
 * CouchDB Map Function: get_permission
 */

function(doc)
{

  if ( doc.clientID   !== undefined &&
       doc.hostID     !== undefined &&
       doc.permission !== undefined &&
       doc.value      !== undefined )
  {
    emit([
      doc.clientID,
      doc.hostID,
      doc.permission
    ], doc.value);
  }

}
