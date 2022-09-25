import React from "react";
import TestRenderer from 'react-test-renderer';
import {ProfileStatus} from "./ProfileStatus";

describe("Test Profile component", () => {
    test("Changed status", () => {
        const component = TestRenderer.create(<ProfileStatus status={"hello!"} updateStatus={()=>{}}/>);
        const instance = component.getInstance()
        expect(instance?.props.updateStatus).toBe("hello!")

    });

    test("after creation span", () => {
        const component = TestRenderer.create(<ProfileStatus status={"hello!"} updateStatus={()=>{}}/>);
        const instance = component.getInstance()
        let span = instance?.findByType("span")
        expect(span).toBe("hello!")
    });
});