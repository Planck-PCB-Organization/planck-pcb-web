package com.firat.planck;

import lombok.NoArgsConstructor;

@NoArgsConstructor
public class Response {
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getResult() {
        return result;
    }

    public void setResult(String result) {
        this.result = result;
    }

    private int id;
    private String result;

    public Response(int id, String result) {
        super();
        this.id = id;
        this.result = result;
    }

}
