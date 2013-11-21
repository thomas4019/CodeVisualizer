
package me.thomashansen.java;

import japa.parser.ast.Node;
import java.util.ArrayList;

/**
 *
 * @author thomas
 */
public class Entity {
	public String group;
	public String name;
	public String type;
    public ArrayList<Function> functions = new ArrayList<Function>();
	LineData line;

	Entity(String name, String type, Node n) {
		this.name = name;
		this.type = type;
		line = new LineData(n);
	}
}
