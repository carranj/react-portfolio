import { useState, useEffect } from 'react'
import { BehaviorSubject } from "rxjs";

export class State<T> extends BehaviorSubject<T> {

    public hook(): [T, (n: T) => void] {
        const [state, setState] = useState(this.value)

        const updateState = (newState: T) => this.next(newState);

        useEffect(() => {
            const subscription = this.subscribe(setState)
            return () => subscription.unsubscribe();
        }, [this])

        return [state, updateState];
    }

}