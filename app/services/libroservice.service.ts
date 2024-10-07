import { Injectable } from '@angular/core';
import { collectionData, docData, limit, query, setDoc } from '@angular/fire/firestore';
import { Firestore, addDoc, collection, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class LibroserviceService {

  constructor(private firestore: Firestore) { }

  addLibroService(libro: any): Promise<any> {
    const librosCollection = collection(this.firestore, 'libros');
    return addDoc(librosCollection, libro);
  }

  obtenerLibros(): Observable<any[]> {
    const librosCollection = collection(this.firestore, 'libros');
    return collectionData(librosCollection, { idField: 'id' });
  }

  eliminarLibroService(id: string): Promise<void> {
    const libroDocRef = doc(this.firestore, `libros/${id}`);
    return deleteDoc(libroDocRef);
  }

  obtenerLibro(id: string): Observable<any> {
    const libroDocRef = doc(this.firestore, `libros/${id}`);
    return docData(libroDocRef, { idField: 'id' });
  }

  actualizarLibroService(id: string, libro: any): Promise<void> {
    const libroDocRef = doc(this.firestore, `libros/${id}`);
    return setDoc(libroDocRef, libro, { merge: true });
  }

  obtenerLibrosRecomendados(): Observable<any[]> {
    const librosCollection = collection(this.firestore, 'libros');
    const librosQuery = query(librosCollection, limit(5));
    return collectionData(librosQuery, { idField: 'id' }); 
  }
}
