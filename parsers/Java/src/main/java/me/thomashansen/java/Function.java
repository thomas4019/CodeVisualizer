
package me.thomashansen.java;

import japa.parser.ast.Node;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 *
 * @author thomas
 */
public class Function {
	public String name;
	LineData line;
	public List<FParameter> args = new ArrayList<FParameter>();
	public Map<String, FunctionCall> usage = new HashMap<String, FunctionCall>();
	
	Function(String name, Node n) {
		this.name = name;
		this.line = new LineData(n);
	}
}
